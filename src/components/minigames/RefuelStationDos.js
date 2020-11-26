import React from "react";
import './css/RefuelStation.css';

class RefuelStation extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.buttonUno = React.createRef();
    this.LIMITE_CARGA = 113;
    this.refuelStation = {
        posX: 30,
        posY: 486,
        ancho: 300,
        alto: 10
    }
    this.miniRefuelStation = {
        posX: 290,
        posY: -115,
        ancho: -80,
        alto: 68
    }
    this.interval = null;
    this.imagenFondo = "https://i.imgur.com/VljZh2G.png";
    }
    
    componentDidMount() {
        this.refuelStationLogic()
    }

    refuelStationLogic(){
        const ctx = this.canvas.current.getContext('2d');
        ctx.fillStyle = "rgb(201,171,36)";

        var imagenFondo = new Image();
        imagenFondo.src = this.imagenFondo;
        imagenFondo.onload = () => {
            this.pintarRectangulo(ctx, this.refuelStation);
            ctx.save();
            ctx.rotate(33 * Math.PI / 180);
            this.pintarRectangulo(ctx, this.miniRefuelStation);
            ctx.restore();
            this.pintarImagenDeFondo(ctx, imagenFondo);
        }        
    }

    handleClickDown = () => {
        this.startTime = new Date();
        this.moverRectangulo(this.refuelStation);
    }

    handleClickUp = () => {
        this.endTime = new Date();
        clearInterval(this.interval);
        this.interval = null;
    }

    moverRectangulo(rect){
        const ctx = this.canvas.current.getContext('2d');
        ctx.fillStyle = "rgb(201,171,36)";
        var imagenFondo = new Image();
        imagenFondo.src = this.imagenFondo;

        if(this.interval === null){
            this.interval = setInterval(() => {
                
                if(this.estaEnElLimite(rect)){
                    alert("Tarea completada 😎👌");
                    clearInterval(this.interval);
                    this.interval = null;
                }
    
                rect.posY -= 0.5;
                rect.alto += 0.5;
                this.limpiarTablero(ctx);
                this.pintarRectangulo(ctx, rect);
                ctx.save();
                this.miniRefuelStation.ancho += 0.1
                ctx.rotate(33 * Math.PI / 180);
                this.pintarRectangulo(ctx, this.miniRefuelStation);
                ctx.restore();
                this.pintarImagenDeFondo(ctx, imagenFondo);
            }, 1)
        }
        else{
            clearInterval(this.interval);
            this.interval = null;
        }
    
    }

    limpiarTablero(context){
        context.clearRect(0,0, 605, 600);
    }
    
    pintarRectangulo(context, { posX, posY, ancho, alto}){
        context.fillRect(posX, posY, ancho, alto);
    }

    pintarImagenDeFondo(context, img){
        context.drawImage(img, 0,0 ,605, 600);
    }
    
    estaEnElLimite(rect){
        return rect.posY <= this.LIMITE_CARGA;
    }

  render() {
      return (
        <React.Fragment>
            <div id="container4">
                <canvas id="game" ref={this.canvas} height="600" width="605" />
                <button id="butFill" ref={ this.buttonUno } onMouseDown={ this.handleClickDown } onMouseUp={ this.handleClickUp } />
            </div>
        </React.Fragment>
        );
    }
}

export default RefuelStation;