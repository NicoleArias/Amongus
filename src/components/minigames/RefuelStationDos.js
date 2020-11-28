import React from "react";
import './css/RefuelStation.css';
import entrarMJ from "../../sounds/EntrarMJ.m4a"
import salirMJ from "../../sounds/SalirMJ.m4a"
import hitSound from "../../sounds/RefuelStation.m4a"
import imagenFondo from "../../img/minigames/refuelstation2.png"

class RefuelStation extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
    this.imagenFondo = "";
    this.clickSound = ""; 

    this.buttonUno = React.createRef();
    this.LIMITE_CARGA = 113;
    this.interval = null;
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
    }
    
    componentDidMount() {
        this.refuelStationLogic()
    }

    refuelStationLogic(){
        this.ctx = this.canvas.current.getContext('2d');
        this.ctx.fillStyle = "rgb(201,171,36)";
        this.clickSound = new Audio(hitSound);

        this.imagenFondo = new Image();
        this.imagenFondo.src = imagenFondo;
        this.imagenFondo.onload = () => {
            this.pintarRectangulo(this.refuelStation);
            this.pintarMiniRectangulo();
            this.pintarImagenDeFondo(this.imagenFondo);
        }        
        this.playSounds(entrarMJ);
    }

    handleClickDown = () => {
        this.startTime = new Date();
        this.clickSound.play();
        this.moverRectangulo(this.refuelStation);
    }

    handleClickUp = () => {
        this.endTime = new Date();
        this.clickSound.pause();
        clearInterval(this.interval);
        this.interval = null;
    }

    moverRectangulo(rect){
        if(this.interval === null){
            this.interval = setInterval(() => {
                
                if(this.estaEnElLimite(rect)){
                    this.clickSound.pause();
                    this.clickSound.currentTime = 0;
                    clearInterval(this.interval);
                    this.interval = null;
                    this.playSounds(salirMJ);
                    setTimeout(() => {
                        alert("Tarea completada 😎👌");
                    }, 200);
                }
                
                rect.posY -= 0.5;
                rect.alto += 0.5;
                this.limpiarTablero();
                this.miniRefuelStation.ancho += 0.1
                this.pintarRectangulo(rect);
                this.pintarMiniRectangulo()
                this.pintarImagenDeFondo(this.imagenFondo);
            }, 1)
        }
        else{
            clearInterval(this.interval);
            this.interval = null;
        }
    
    }

    playSounds(sound) {
        let sounds = new Audio(sound);
        sounds.play();
    }

    limpiarTablero(){
        this.ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
    }
    
    pintarRectangulo({ posX, posY, ancho, alto}){
        this.ctx.fillRect(posX, posY, ancho, alto);
    }

    pintarMiniRectangulo(){
        this.ctx.save();
        this.ctx.rotate(33 * Math.PI / 180);
        this.pintarRectangulo(this.miniRefuelStation);
        this.ctx.restore();
    }

    pintarImagenDeFondo(img){
        this.ctx.drawImage(img, 0, 0,this.canvas.current.width, this.canvas.current.height);
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
