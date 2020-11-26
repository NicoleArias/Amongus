import React from "react";
import './css/ChartCourse.css';

class ChartCourse extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
    this.imagenFondo = "";
    this.imagenNave = "";
    this.nivel = 0;
    this.grados = -45;
    this.limiteIzq = -280;
    this.limiteIzqDos = -240;
    this.limiteDer = 30;
    this.limiteDerDos = 200;
    this.srcImagenNave = "https://i.imgur.com/V62kLgI.png";
    this.srcImagenFondo = "https://i.imgur.com/AqBMGZm.png";
    this.arrastrar = false;
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
        this.imagenFondo.src = this.srcImagenFondo;
        this.imagenFondo.onload = () => {
            this.pintarImagenDeFondo(this.imagenFondo);
        }   

        this.imagenNave = new Image();
        this.imagenNave.src = this.srcImagenNave;
        this.imagenNave.onload = () => {
            this.dibujarNave(this.imagenNave, this.nave);
        }        
    }

    pintarImagenDeFondo(img){
        this.ctx.drawImage(img, 0,0 ,1116, 666);
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

    cambiarValores(){
        switch (this.nivel) {
            case 0:
                this.nivel = 0;
                this.grados = -45;
                this.limiteIzq = -280;
                this.limiteIzqDos = -240;
                this.limiteDer = 30;
                this.limiteDerDos = 200;
                this.nave.posX = -239
                this.nave.posY = 385
                this.clear();
                this.dibujarNave(this.imagenNave, this.nave);
                break;
            case 1:
                this.grados = 38;
                this.limiteIzq = 340;
                this.limiteIzqDos = 380;
                this.limiteDer = 628;
                this.limiteDerDos = 900;
                this.nave.posX = 381
                this.nave.posY = -70
                this.clear();
                this.dibujarNave(this.imagenNave, this.nave);
                break;
            case 2:
                this.grados = -45;
                this.limiteIzq = 20;
                this.limiteIzqDos = 60;
                this.limiteDer = 342;
                this.limiteDerDos = 525;
                this.nave.posX = 61
                this.nave.posY = 635
                this.clear();
                this.dibujarNave(this.imagenNave, this.nave);
                break;
            case 3:
                this.grados = 39;
                this.limiteIzq = 500;
                this.limiteIzqDos = 660;
                this.limiteDer = 915;
                this.limiteDerDos = 1100;
                this.nave.posX = 661;
                this.nave.posY = -355;
                this.clear();
                this.dibujarNave(this.imagenNave, this.nave);
                break;
        
            default:
                break;
        }
    }
    
    handleClickDown = (e) => {
        // this.startTime = new Date();
        // this.moverRectangulo(this.refuelStation);
        var mousePos = this.oMousePos(e);
            this.arrastrar = true;
            console.log("abajo");
            this.delta.x = this.nave.posX - mousePos.x;
            this.delta.y = this.nave.posY - mousePos.y;
    }

    handleClickMove = (e) => {
        // this.startTime = new Date();
        if (this.arrastrar) {
            var mousePos = this.oMousePos(e);

            if (this.nave.posX >= this.limiteIzq && this.nave.posX <= this.limiteIzqDos) {
                this.arrastrar = false
                this.nave.posX = this.limiteIzqDos + 2
                console.log("limite")
            } else {
                this.arrastrar = true
                this.clear();
                this.nave.posX = mousePos.x + this.delta.x
                this.dibujarNave(this.imagenNave, this.nave);
                if (this.nave.posX >= this.limiteDer && this.nave.posX <= this.limiteDerDos) {
                    this.arrastrar = false
                    this.nave.posX = this.limiteDer + 1
                    if (this.nivel === 3) {
                        alert("Tarea Completada 😎👌")
                    }
                    this.nivel++;
                    console.log("limite xdxd")
                }
            }
        }
    }   

    handleClickUp = () => {
        // this.endTime = new Date();
        this.arrastrar = false;
        this.cambiarValores()
        console.log("arriba");
    }

    // this.ctx.drawImage(this.imagenNave, e.clientX - this.nave.posX, this.nave.posY, this.nave.ancho, this.nave.alto);
    clear(){
        this.ctx.clearRect(0, 0, 1116, 666);
        this.pintarImagenDeFondo(this.imagenFondo);
        // this.dibujarNave(this.imagenNave, this.nave);
    }

  render() {
      return (
        <React.Fragment>
            <div id="container">
                <canvas ref={this.canvas} onMouseDown={ this.handleClickDown } onMouseMove={ this.handleClickMove } 
                onMouseUp={ this.handleClickUp } height="666" width="1116" />
            </div>
        </React.Fragment>
        );
    }
}

export default ChartCourse;
