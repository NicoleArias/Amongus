import React from "react";
import './css/SwipeCard.css';
import entrarMJ from "../../sounds/EntrarMJ.m4a"
import salirMJ from "../../sounds/SalirMJ.m4a"
import hitSound from "../../sounds/SwipeCardHit.m4a"
import grabSound from "../../sounds/SwipeCardGrab.m4a"
import failSound from "../../sounds/SwipeCardFail.m4a"
import imagenFondo1 from "../../img/minigames/SwipeCardUp.png"
import imagenFondo2 from "../../img/minigames/SwipeCardDown.png"
import card from "../../img/minigames/Card.png"
import imgOrbeVerde from "../../img/minigames/orbe verde.png"
import imgOrbeRojo from "../../img/minigames/orbe roja.png"

class SwipeCard extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
    this.imagenFondo1 = "";
    this.imagenFondo2 = "";
    this.imagenCard = "";
    this.imgOrbeVerde = "";
    this.imgOrbeRojo = "";

    this.clicking = true;
    this.arrastrar = false;
    this.limiteIzq = -170;
    this.limiteIzqDos = 14;
    this.limiteDer = 610;
    this.limiteDerDos = 900;

    this.delta = {
        x: 0,
        y: 0
    };
    this.card = {
        posX: 15,
        posY: 128,
        ancho: 268,
        alto: 161
    }
    // this.orbePos = {
    //     posY: "137",
    //     ancho: "43",
    //     alto: "42"
    // } 
    }
    
    componentDidMount() {
        this.SwipeCardLogic()
    }

    SwipeCardLogic(){
        this.ctx = this.canvas.current.getContext('2d');

        this.imgOrbeRojo = new Image();
        this.imgOrbeVerde = new Image();
        this.imgOrbeRojo.src = imgOrbeRojo;
        this.imgOrbeVerde.src = imgOrbeVerde;

        this.imagenFondo2 = new Image();
        this.imagenFondo1 = new Image();
        this.imagenCard = new Image();
        this.imagenFondo2.src = imagenFondo2;
        this.imagenFondo1.src = imagenFondo1;
        this.imagenCard.src = card;
        this.imagenFondo1.onload = () => {
            this.pintarImagenMinijuego(this.imagenFondo1, this.imagenFondo2, this.imagenCard, this.card);
        }   

        this.playSounds(entrarMJ);
    }

    pintarImagenMinijuego(img, img2, img3, { posX, posY, ancho, alto}){
        this.ctx.drawImage(img2, 150, 195, this.canvas.current.width - 300, this.canvas.current.height -195);
        this.ctx.drawImage(img3, posX, posY, ancho, alto);
        this.ctx.drawImage(img, 150, 0, this.canvas.current.width - 300, this.canvas.current.height - 405);
    }

    // pintarOrbe(orbec, posX, {posY, ancho, alto}){
    //     this.ctx.drawImage(orbec, posX, posY, ancho, alto);
    // }

    reiniciarValores(){
        this.card.posX = 15
        this.clear();
    }

    oMousePos(evt) {
        var rect = this.canvas.current.getBoundingClientRect();
        return {
            x: Math.round(evt.clientX - rect.left),
            y: Math.round(evt.clientY - rect.top)
        };
    }

    playSounds(sound) {
        let sounds = new Audio(sound);
        sounds.play();
    }
    
    handleClickDown = (e) => {
        if (this.clicking) {
            var mousePos = this.oMousePos(e);
            this.arrastrar = true;
            this.playSounds(grabSound);
            console.log("abajo");
            this.delta.x = this.card.posX - mousePos.x;
            this.delta.y = this.card.posY - mousePos.y;
        }
    }

    handleClickMove = (e) => {
        if (this.arrastrar) {
            var mousePos = this.oMousePos(e);
            if (this.card.posX >= this.limiteIzq && this.card.posX <= this.limiteIzqDos) {
            this.playSounds(failSound);
                this.arrastrar = false
                this.card.posX = 1
                console.log("limite izquierdo")
            } else {
                this.clear();
                this.card.posX = mousePos.x + this.delta.x
                console.log(this.card.posX)
                this.pintarImagenMinijuego(this.imagenFondo1, this.imagenFondo2, this.imagenCard, this.card);
                if (this.card.posX >= this.limiteDer && this.card.posX <= this.limiteDerDos) {
                    this.playSounds(failSound);
                    this.arrastrar = false
                    this.card.posX = 15
                    console.log("limite derecho")
                }
            }
        }
    }   

    handleClickUp = () => {
        if (this.clicking) {
            if (this.card.posX >= 570 && this.card.posX <= 585) {
                this.playSounds(hitSound);
                this.clicking = false
                this.arrastrar = false
                this.card.posX = 577
                this.playSounds(salirMJ);
                setTimeout(() => {
                    alert("Tarea completada 😎👌");
                }, 200);
            } else{
                this.playSounds(failSound);
                this.arrastrar = false;
                this.reiniciarValores()
                console.log("arriba");
            }
        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
        this.pintarImagenMinijuego(this.imagenFondo1, this.imagenFondo2, this.imagenCard, this.card);
    }

  render() {
      return (
        <React.Fragment>
            <div id="containerSw">
                <canvas ref={this.canvas} onMouseDown={ this.handleClickDown } onMouseMove={ this.handleClickMove } 
                onMouseUp={ this.handleClickUp } height="600" width="900" />
            </div>
        </React.Fragment>
        );
    }
}

export default SwipeCard;
