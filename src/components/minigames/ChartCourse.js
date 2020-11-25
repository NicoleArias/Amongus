import React from "react";
import './css/ChartCourse.css';

class ChartCourse extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
    this.imagenFondo = "";
    this.imagenNave = "";
    this.srcImagenNave = "https://i.imgur.com/V62kLgI.png";
    this.srcImagenFondo = "https://i.imgur.com/AqBMGZm.png";
    this.arrastrar = false;
    this.delta = {
        x: 0,
        y: 0
    };
    this.nave = {
        posX: -210,
        posY: 400,
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
        this.ctx.rotate(-40 * Math.PI / 180);
        this.ctx.drawImage(img, posX, posY, ancho, alto);
        this.ctx.restore();

    }

    oMousePos(evt) {
        var rect = this.canvas.current.getBoundingClientRect();
        console.log(rect)
        debugger
        return { // devuelve un objeto
            x: Math.round(evt.clientX - rect.left),
            y: Math.round(evt.clientY - rect.top)
        };
    }
    
    handleClickDown = (e) => {
        // this.startTime = new Date();
        // this.moverRectangulo(this.refuelStation);
        var mousePos = this.oMousePos(e);
        if (this.ctx.isPointInPath(mousePos.x, mousePos.y)) {
            this.arrastrar = true;
            console.log("abajo");
            this.delta.x = this.nave.posX - mousePos.x;
            this.delta.y = this.nave.posY - mousePos.y;
        }
    }

    handleClickMove = (e) => {
        // this.startTime = new Date();
        // this.moverRectangulo(this.refuelStation);
        var mousePos = this.oMousePos(e);
        console.log("moviendo");
        
        if (this.arrastrar) {
            // if (this.nave.posX >= -210 && this.nave.posX <= 100) {
            //     alert("K pro 😎👌");
            //     this.ctx.clearRect(0, 0, 1116, 666);
            //      this.pintarImagenDeFondo(this.imagenFondo);
            //     this.nave.posX = -210;
            // this.dibujarNave(this.imagenNave, this.nave);
            // }
            this.ctx.clearRect(0, 0, 1116, 666);
            this.pintarImagenDeFondo(this.imagenFondo);
            this.nave.posX = mousePos.x + this.delta.x
            this.dibujarNave(this.imagenNave, this.nave);
        }
    }

    handleClickUp = () => {
        // this.endTime = new Date();
        // clearInterval(this.interval);
        // this.interval = null;
        this.arrastrar = false;
        console.log("arriba");
        this.ctx.clearRect(0, 0, 1116, 666);
        this.pintarImagenDeFondo(this.imagenFondo);
        this.dibujarNave(this.imagenNave, this.nave);
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
