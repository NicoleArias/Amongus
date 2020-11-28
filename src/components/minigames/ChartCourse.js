import React from "react";
import './css/ChartCourse.css';
import entrarMJ from "../../sounds/EntrarMJ.m4a"
import salirMJ from "../../sounds/SalirMJ.m4a"
import hitSound from "../../sounds/ChartCourse.m4a"
import imagenFondo from "../../img/minigames/ChartCourse.png"
import nave from "../../img/minigames/NaveXp.png"

class ChartCourse extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
    this.imagenFondo = "";
    this.imagenNave = "";

    this.clicking = true;
    this.arrastrar = false;
    this.nivel = 0;
    this.grados = -45;
    this.limiteIzq = -280;
    this.limiteIzqDos = -240;
    this.limiteDer = 30;
    this.limiteDerDos = 200;

    this.delta = {
        x: 0,
        y: 0
    };
    this.nave = {
        posX: -239,
        posY: 385,
        ancho: 103,
        alto: 77
    } 
    }
    
    componentDidMount() {
        this.ChartCourseLogic()
    }

    ChartCourseLogic(){
        this.ctx = this.canvas.current.getContext('2d');

        this.imagenFondo = new Image();
        this.imagenFondo.src = imagenFondo;
        this.imagenFondo.onload = () => {
            this.pintarImagenDeFondo(this.imagenFondo);
        }   

        this.imagenNave = new Image();
        this.imagenNave.src = nave;
        this.imagenNave.onload = () => {
            this.dibujarNave(this.imagenNave, this.nave);
        }
        this.playSounds(entrarMJ);
    }

    pintarImagenDeFondo(img){
        this.ctx.drawImage(img, 0, 0, this.canvas.current.width, this.canvas.current.height);
    }

    dibujarNave(img, { posX, posY, ancho, alto}){
        this.ctx.save();
        this.ctx.rotate(this.grados * Math.PI / 180);
        this.ctx.drawImage(img, posX, posY, ancho, alto);
        this.ctx.restore();
    }

    oMousePos(evt) {
        var rect = this.canvas.current.getBoundingClientRect();
        // console.log(rect)
        return { // devuelve un objeto
            x: Math.round(evt.clientX - rect.left),
            y: Math.round(evt.clientY - rect.top)
        };
    }
    asignarValores(grados, limiteIzq, limiteIzqDos, limiteDer, limiteDerDos, posX, posY){
        this.grados = grados;
        this.limiteIzq = limiteIzq;
        this.limiteIzqDos = limiteIzqDos;
        this.limiteDer = limiteDer;
        this.limiteDerDos = limiteDerDos;
        this.nave.posX = posX
        this.nave.posY = posY
        this.clear();
        this.dibujarNave(this.imagenNave, this.nave);
    }

    cambiarValores(){
        switch (this.nivel) {
            case 0:
                this.asignarValores( -45, -280, -240, 30, 200, -239, 385);
                break;
            case 1:
                this.asignarValores( 38, 340, 380, 628, 900, 381, -70);
                break;
            case 2:
                this.asignarValores( -45, 20, 60, 342, 525, 61, 635);
                break;
            case 3:
                this.asignarValores( 39, 500, 660, 915, 1100, 661, -355);
                break;
        
            default:
                break;
        }
    }

    playSounds(sound) {
        let sounds = new Audio(sound);
        sounds.play();
    }
    
    handleClickDown = (e) => {
        if (this.clicking) {
            var mousePos = this.oMousePos(e);
            this.arrastrar = true;
            console.log("abajo");
            this.delta.x = this.nave.posX - mousePos.x;
            this.delta.y = this.nave.posY - mousePos.y;
        }
    }

    handleClickMove = (e) => {
        if (this.arrastrar) {
            var mousePos = this.oMousePos(e);

            if (this.nave.posX >= this.limiteIzq && this.nave.posX <= this.limiteIzqDos) {
                this.arrastrar = false
                this.nave.posX = this.limiteIzqDos + 2
                console.log("limite izquierdo")
            } else {
                this.arrastrar = true
                this.clear();
                this.nave.posX = mousePos.x + this.delta.x
                this.dibujarNave(this.imagenNave, this.nave);
                if (this.nave.posX >= this.limiteDer && this.nave.posX <= this.limiteDerDos) {
                    this.arrastrar = false
                    this.nave.posX = this.limiteDer + 1
                    this.playSounds(hitSound);
                    if (this.nivel === 3) {
                        this.clicking = false;
                        this.nave.posX = this.limiteDer + 3
                        this.playSounds(salirMJ);
                        setTimeout(() => {
                            alert("Tarea completada 😎👌");
                        }, 200);
                    }
                    this.nivel++;
                    console.log("limite derecho")
                }
            }
        }
    }   

    handleClickUp = () => {
        this.arrastrar = false;
        this.cambiarValores()
        console.log("arriba");
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
        this.pintarImagenDeFondo(this.imagenFondo);
    }

  render() {
      return (
        <React.Fragment>
            <div id="container5">
                <canvas ref={this.canvas} onMouseDown={ this.handleClickDown } onMouseMove={ this.handleClickMove } 
                onMouseUp={ this.handleClickUp } height="666" width="1116" />
            </div>
        </React.Fragment>
        );
    }
}

export default ChartCourse;
