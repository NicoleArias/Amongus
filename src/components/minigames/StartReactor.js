import React from "react";
import './css/StartReactor.css';
import entrarMJ from "../../sounds/EntrarMJ.m4a"
import salirMJ from "../../sounds/SalirMJ.m4a"
import failSound from "../../sounds/StartReactorFail.m4a"
import hitSound from "../../sounds/StartReactorHit1.m4a"
import hit2Sound from "../../sounds/StartReactorHit2.m4a"
import hit3Sound from "../../sounds/StartReactorHit3.m4a"
import hit4Sound from "../../sounds/StartReactorHit4.m4a"
import hit5Sound from "../../sounds/StartReactorHit5.m4a"
import imagenFondo from "../../img/minigames/reactor2.png"
import imgOrbeVerde from "../../img/minigames/orbe verde.png"
import imgOrbeRojo from "../../img/minigames/orbe roja.png"

class StartReactor extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
    this.imagenFondo = "";
    this.imgOrbeVerde = "";
    this.imgOrbeRojo = "";

    this.buttonUno = React.createRef();
    this.buttonDos = React.createRef();
    this.buttonTres = React.createRef();
    this.buttonCuatro = React.createRef();
    this.buttonCinco = React.createRef();    
    this.buttonSeis = React.createRef();
    this.buttonSiete = React.createRef();
    this.buttonOcho = React.createRef();
    this.buttonNueve = React.createRef();

    this.inicio = true;
    this.clicking = false;
    this.secuencia = [];
    this.indSec = 0;
    this.nivel = 1;
    this.increDerArray = 0;
    this.increIzqArray = 1;
    this.sounds = [hitSound, hit2Sound, hit3Sound, hit4Sound, hit5Sound]

    this.transparent = 'background-color: transparent;'
    this.gray = 'background-color: rgba(115, 115, 115, 0.65);'
    this.hitColor = 'background-color: rgba(56, 137, 210, 0.65);'
    this.failColor = 'background-color: rgba(208, 47, 0, 0.65);'

    this.orbePos = {
        posY: "92",
        ancho: "54",
        alto: "53"
    }
    this.cuadroPos = {
        ancho: "100",
        alto: "100"
    }

    this.arrayNumberButton = [this.buttonUno, this.buttonDos, this.buttonTres, this.buttonCuatro, 
        this.buttonCinco, this.buttonSeis, this.buttonSiete, this.buttonOcho, this.buttonNueve];
    this.orbesPosXIsq = [98, 178, 262, 344, 424];
    this.orbesPosXDer = [711, 792, 873, 958, 1038];
    this.cuadrosPosXeY = [[138, 238], [248, 238], [358, 238], 
    [138, 348], [248, 348], [358, 348], 
    [138, 458], [248, 458], [358, 458]];  
    }
    
    componentDidMount() {
        this.startReactorLogic()
    }

    startReactorLogic(){
        this.ctx = this.canvas.current.getContext('2d');
        this.ctx.fillStyle = "rgb(56,137,210)";

        this.imgOrbeRojo = new Image();
        this.imgOrbeRojo.src = imgOrbeRojo;
        this.imgOrbeRojo.onload = () => {
            this.pintarOrbe(this.imgOrbeRojo, this.orbesPosXIsq[0], this.orbePos);
        }

        this.imgOrbeVerde = new Image();
        this.imgOrbeVerde.src = imgOrbeVerde;
        this.imgOrbeVerde.onload = () => {
            this.pintarOrbe(this.imgOrbeVerde, this.orbesPosXIsq[0], this.orbePos);
        }

        this.imagenFondo = new Image();
        this.imagenFondo.src = imagenFondo;
        this.imagenFondo.onload = () => {
            this.pintarImagenDeFondo(this.imagenFondo);
        } 

        this.playSounds(entrarMJ);
        setTimeout(() => {
            this.comienzaPartida(); 
        }, 1500);
    }


    limpiarTablero(){
        this.ctx.clearRect(0,0, this.canvas.current.width, this.canvas.current.height);
    }
    pintarImagenDeFondo(img){
        this.ctx.drawImage(img, 0,0 ,this.canvas.current.width, this.canvas.current.height);
    }

    pintarOrbe(orbec, posX, {posY, ancho, alto}){
        this.ctx.drawImage(orbec, posX, posY, ancho, alto);
    }
    
    pintarRectangulo(posX, posY, {ancho, alto}){
        this.ctx.fillRect(posX, posY, ancho, alto);
        setTimeout(() => {
            this.limpiarTodo()
        }, 500);
    }
    
    orbePosCorrect(limite, orbePosi) {
        for (let i = 0; i < limite; i++) {
            this.pintarOrbe(this.imgOrbeVerde, orbePosi[i], this.orbePos);
        }
    }

    limpiarTodo(){
        this.limpiarTablero();
        this.pintarImagenDeFondo(this.imagenFondo);
        this.orbePosCorrect(this.increIzqArray, this.orbesPosXIsq);
        this.buttomColor(this.gray);
        this.indSec++;
        setTimeout(() => {
            this.iniciaSecuencia()}
        , 150);
    }

    comienzaPartida() {
        if (this.inicio) {
            this.reiValores();
            this.setRandomNumber();
            this.iniciaSecuencia(); 
        }    
    }

    reiValores() {
        this.secuencia = [];
        this.indSec = 0;
        this.nivel = 1;
        this.increDerArray = 0;
        this.increIzqArray = 1;
    }

    setRandomNumber() {
        this.secuencia.push(parseInt(Math.random() * 9));
    }

    iniciaSecuencia(){
        if(this.indSec < this.secuencia.length){
            this.playRandomSoundsHit();
            this.pintarRectangulo(this.cuadrosPosXeY[this.secuencia[this.indSec]][0], 
                this.cuadrosPosXeY[this.secuencia[this.indSec]][1], this.cuadroPos);
        }
        else{
            this.orbePosCorrect(this.increDerArray, this.orbesPosXIsq);
            this.indSec = 0;
            this.buttomColor(this.transparent);
            this.clicking = true;
        }
    }

    buttomColor(color) {
        this.arrayNumberButton.forEach(numButton => {
            numButton.current.style.cssText = color;
        });
    }
    

    handleClick = (e) => {
        if (this.clicking) {
            this.comprobarNumero(parseInt(e.target.value));
        }
    }
    
    comprobarNumero(numero) {
        if(numero === this.secuencia[this.indSec]){
            this.hit(numero);
        } 
        else if(numero !== this.secuencia[this.indSec]){
            this.fail();
        }
    }

    playSounds(sound) {
        let sounds = new Audio(sound);
        sounds.play();
    }

    playRandomSoundsHit() {
        let sound = new Audio(this.sounds[parseInt(Math.random() * 5)]);
        sound.play();
    }

    hit(numero) {
        this.playRandomSoundsHit();
        this.arrayNumberButton[numero].current.style.cssText = this.hitColor;
        setTimeout(() => {
            this.arrayNumberButton[numero].current.style.cssText = this.transparent;
            this.hitOff();
        }, 200);
    }

    hitOff() {
        this.increDerArray++;
        this.orbePosCorrect(this.increDerArray, this.orbesPosXDer)
        this.indSec++;
        if(this.indSec === this.secuencia.length){  
            if (this.nivel === 5) {
                this.playSounds(salirMJ);
                this.inicio = false;
                setTimeout(() => {
                    alert("Tarea completada 😎👌");
                    // this.container.current.style.cssText = ('visibility: hidden;');
                }, 200);
                
            }
            if (this.inicio ) {
                this.nivel++;
                this.increIzqArray++;
                this.orbePosCorrect(this.increIzqArray, this.orbesPosXIsq);
                this.setRandomNumber();
                this.increDerArray = 0;
                this.indDerArray = [];
                this.indSec = 0;
                this.buttomColor(this.gray);
                this.clicking = false;
                setTimeout(() => {
                    this.iniciaSecuencia()
                }, 1000); 
            }
            
        }
    }

    fail() {
        this.playSounds(salirMJ);
        this.clicking = false;
        this.playSounds(failSound)
        this.aniFail();
        setTimeout(() => {
            this.aniFail();
        }, 500);
        setTimeout(() => {
            this.buttomColor(this.gray);
        }, 600);
        setTimeout(() => {
            this.comienzaPartida();
        }, 1400);
    }

    aniFail() {
        this.orbesPosXDer.forEach(orbes => {
            this.pintarOrbe(this.imgOrbeRojo, orbes, this.orbePos);
        });
        this.buttomColor(this.failColor)
        setTimeout(() => {
            this.buttomColor(this.transparent)
            this.limpiarTablero();
            this.pintarImagenDeFondo(this.imagenFondo);
            }, 200);
    }
    
    comprobarCambio(e) {
        if(e.target.value === "1"){
            this.contPos++;
            e.target.style.cssText = this.imgGreen;
            if (this.contPos > 6) {
                setTimeout(() => {
                    alert("Tarea Completada 😎👌");
                }, 100);
            }
        } 
        else{
            this.contPos--;
            e.target.style.cssText = this.imgRed;
        }
    }

  render() {
      return (
        <React.Fragment>
            <div id="container2">
                <canvas ref={this.canvas} height="680" width="1200" />
                <button className="action2" id="uno2" ref={this.buttonUno} value="0" onClick={this.handleClick} />
                <button className="action2" id="dos2" ref={this.buttonDos} value="1" onClick={this.handleClick} />
                <button className="action2" id="tres2" ref={this.buttonTres} value="2" onClick={this.handleClick} />
                <button className="action2" id="cuatro2" ref={this.buttonCuatro} value="3" onClick={this.handleClick} />
                <button className="action2" id="cinco2" ref={this.buttonCinco} value="4" onClick={this.handleClick} />
                <button className="action2" id="seis2" ref={this.buttonSeis} value="5" onClick={this.handleClick} />
                <button className="action2" id="siete2" ref={this.buttonSiete} value="6" onClick={this.handleClick} />
                <button className="action2" id="ocho2" ref={this.buttonOcho} value="7" onClick={this.handleClick} />
                <button className="action2" id="nueve2" ref={this.buttonNueve} value="8" onClick={this.handleClick} />
            </div>
        </React.Fragment>
        );
    }
}

export default StartReactor;
