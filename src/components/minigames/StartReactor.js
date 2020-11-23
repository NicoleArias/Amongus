import React from "react";
import './css/StartReactor.css';

class PrimeShields extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.buttonUno = React.createRef();
    this.buttonDos = React.createRef();
    this.buttonTres = React.createRef();
    this.buttonCuatro = React.createRef();
    this.buttonCinco = React.createRef();    
    this.buttonSeis = React.createRef();
    this.buttonSiete = React.createRef();
    this.buttonOcho = React.createRef();
    this.buttonNueve = React.createRef();

    this.clicking = false;
    this.secuencia = [];
    this.indSec = 0;
    this.nivel = 1;
    this.increDerArray = 0;
    this.increIzqArray = 1;

    this.imgOrbeVerde = "https://i.imgur.com/ssj9GCl.png";
    this.imgOrbeRojo = "https://i.imgur.com/Qd0KuYo.png";
    this.imagenFondo = "https://i.imgur.com/40xaJKe.png";

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
        this.primeShieldLogic()
    }

    primeShieldLogic(){
        const ctx = this.canvas.current.getContext('2d')
        ctx.fillStyle = "rgb(56,137,210)";

        var imagenFondo = new Image();
        var imgOrbeVerde = new Image();
        var imgOrbeRojo = new Image();
        imagenFondo.src = this.imagenFondo;
        imgOrbeVerde.src = this.imgOrbeVerde;
        imgOrbeRojo.src = this.imgOrbeRojo;

        imgOrbeRojo.onload = () => {
            this.pintarOrbe(ctx, imgOrbeRojo, this.orbesPosXIsq[0], this.orbePos);
        }

        imgOrbeVerde.onload = () => {
            this.pintarOrbe(ctx, imgOrbeVerde, this.orbesPosXIsq[0], this.orbePos);
        }

        imagenFondo.onload = () => {
            this.pintarImagenDeFondo(ctx, imagenFondo);
        } 
        
        setTimeout(() => {
            this.comienzaPartida(ctx); 
        }, 2000);
    }


    limpiarTablero(context){
        context.clearRect(0,0, 1200, 680);
    }
    pintarImagenDeFondo(context, img){
        context.drawImage(img, 0,0 ,1200, 680);
    }

    pintarOrbe(context, orbec, posX, {posY, ancho, alto}){
        context.drawImage(orbec, posX, posY, ancho, alto);
    }
    
    pintarRectangulo(context, posX, posY, {ancho, alto}){
        context.fillRect(posX, posY, ancho, alto);
        setTimeout(() => {
            this.limpiarTodo(context)
        }, 500);
    }
    
    orbePosCorrect(context, limite, orbePosi) {
        var imgOrbeVerde = new Image();
        imgOrbeVerde.src = this.imgOrbeVerde;
        for (let i = 0; i < limite; i++) {
            this.pintarOrbe(context, imgOrbeVerde, orbePosi[i], this.orbePos);
        }
    }

    limpiarTodo(context){
        var imagenFondo = new Image();
        imagenFondo.src = this.imagenFondo;
        this.limpiarTablero(context);
        this.pintarImagenDeFondo(context, imagenFondo);
        this.orbePosCorrect(context, this.increIzqArray, this.orbesPosXIsq);
        this.buttomColor(this.gray);
        this.indSec++;
        setTimeout(() => {
            this.iniciaSecuencia(context)}
        , 150);
    }

    comienzaPartida(context) {
        this.reiValores();
        this.setRandomNumber();
        this.iniciaSecuencia(context);
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

    iniciaSecuencia(context){
        if(this.indSec < this.secuencia.length){
            this.pintarRectangulo(context, this.cuadrosPosXeY[this.secuencia[this.indSec]][0], 
                this.cuadrosPosXeY[this.secuencia[this.indSec]][1], this.cuadroPos);
        }
        else{
            this.orbePosCorrect(context, this.increDerArray, this.orbesPosXIsq);
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

    hit(numero) {
        this.arrayNumberButton[numero].current.style.cssText = this.hitColor;
        setTimeout(() => {
            this.arrayNumberButton[numero].current.style.cssText = this.transparent;
            console.log(numero + "xdxd")
            this.hitOff();
        }, 200);
    }

    hitOff() {
        const ctx = this.canvas.current.getContext('2d')
        ctx.fillStyle = "rgb(56,137,210)";

        this.increDerArray++;
        this.orbePosCorrect(ctx, this.increDerArray, this.orbesPosXDer)
        this.indSec++;
        if(this.indSec === this.secuencia.length){  
            if (this.nivel === 5) {
                // this.container.current.style.cssText = ('visibility: hidden;');
                alert("Tarea Completada 😎👌");
            }
            this.nivel++;
            this.increIzqArray++;
            this.orbePosCorrect(ctx, this.increIzqArray, this.orbesPosXIsq);
            this.setRandomNumber();
            this.increDerArray = 0;
            this.indDerArray = [];
            this.indSec = 0;
            this.buttomColor(this.gray);
            this.clicking = false;
            debugger
            setTimeout(() => {
                this.iniciaSecuencia(ctx)
            }, 1000);
        }
    }

    fail() {
        console.log("xdxd")
        const ctx = this.canvas.current.getContext('2d')
        this.clicking = false;
        this.aniFail(ctx);
        setTimeout(() => {
            this.aniFail(ctx);
        }, 500);
        setTimeout(() => {
            this.buttomColor(this.gray);
        }, 600);
        setTimeout(() => {
            this.comienzaPartida(ctx);
        }, 1400);
    }

    aniFail(context) {
        var imagenFondo = new Image();
        imagenFondo.src = this.imagenFondo;
        var imgOrbeRojo = new Image();
        imgOrbeRojo.src = this.imgOrbeRojo;

        this.orbesPosXDer.forEach(orbes => {
            this.pintarOrbe(context, imgOrbeRojo, orbes, this.orbePos);
        });
        this.buttomColor(this.failColor)
        setTimeout(() => {
            this.buttomColor(this.transparent)
            this.limpiarTablero(context);
            this.pintarImagenDeFondo(context, imagenFondo);
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
            <div id="container">
                <canvas ref={this.canvas} height="680" width="1200" />
                <button className="action" id="uno" ref={this.buttonUno} value="0" onClick={this.handleClick} />
                <button className="action" id="dos" ref={this.buttonDos} value="1" onClick={this.handleClick} />
                <button className="action" id="tres" ref={this.buttonTres} value="2" onClick={this.handleClick} />
                <button className="action" id="cuatro" ref={this.buttonCuatro} value="3" onClick={this.handleClick} />
                <button className="action" id="cinco" ref={this.buttonCinco} value="4" onClick={this.handleClick} />
                <button className="action" id="seis" ref={this.buttonSeis} value="5" onClick={this.handleClick} />
                <button className="action" id="siete" ref={this.buttonSiete} value="6" onClick={this.handleClick} />
                <button className="action" id="ocho" ref={this.buttonOcho} value="7" onClick={this.handleClick} />
                <button className="action" id="nueve" ref={this.buttonNueve} value="8" onClick={this.handleClick} />
            </div>
        </React.Fragment>
        );
    }
}

export default PrimeShields;