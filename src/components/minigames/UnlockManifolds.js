import React from "react";
import './css/UnlockManifolds.css';
import entrarMJ from "../../sounds/EntrarMJ.m4a"
import salirMJ from "../../sounds/SalirMJ.m4a"
import hitSound from "../../sounds/UnlockManifoldsHit.m4a"
import failSound from "../../sounds/UnlockManifoldsFail.m4a"
import imagenFondo from "../../img/minigames/Unlock Manifolds.png"

class UnlockManifolds extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = "";
    this.imagenFondo = "";

    this.buttonUno = React.createRef();
    this.buttonDos = React.createRef();
    this.buttonTres = React.createRef();
    this.buttonCuatro = React.createRef();
    this.buttonCinco = React.createRef();    
    this.buttonSeis = React.createRef();
    this.buttonSiete = React.createRef();
    this.buttonOcho = React.createRef();
    this.buttonNueve = React.createRef();
    this.buttonDiez = React.createRef();

    this.originalColor = 'background-color:  rgba(164, 180, 224, 1);'
    this.hitColor = 'background-color: rgba(41, 179, 101, 1);'
    this.failColor = 'background-color: rgba(142, 18, 66, 1);'
    
    this.contPos = 0;
    this.secuencia = [1,2,3,4,5,6,7,8,9,10]
    this.arrayNumberButton = [this.buttonUno, this.buttonDos, this.buttonTres, this.buttonCuatro, this.buttonCinco, 
        this.buttonSeis, this.buttonSiete, this.buttonOcho, this.buttonNueve,this.buttonDiez];
    }
    
    componentDidMount() {
        this.unlockManifoldsLogic()
    }
   
    unlockManifoldsLogic(){
        this.ctx = this.canvas.current.getContext('2d');

        this.imagenFondo = new Image();
        this.imagenFondo.src = imagenFondo;
        this.imagenFondo.onload = () => {
            this.pintarImagenDeFondo(this.imagenFondo);
        }     

        this.setRandomNumber(this.arrayNumberButton);   
    }

    pintarImagenDeFondo(img){
        this.ctx.drawImage(img, 0, 0, this.canvas.current.width, this.canvas.current.height);
    }

    setRandomNumber(e) {
        this.secuencia = this.secuencia.sort(function() {return Math.random() - 0.5});
        var aumValor = 0;
        e.forEach(numButton => {
            numButton.current.value = this.secuencia[aumValor];
            numButton.current.innerHTML = this.secuencia[aumValor];
            aumValor++;
        });
        this.playSounds(entrarMJ);
    } 

    playSounds(sound) {
        let sounds = new Audio(sound);
        sounds.play();
    }

    buttomColor(color) {
        this.arrayNumberButton.forEach(numButton => {
            numButton.current.style.cssText = color;
        });
    }

    hit(e) {
        this.playSounds(hitSound);
        this.contPos++;
        e.target.style.cssText = this.hitColor;
    }

    fail() { 
        this.playSounds(failSound);
        this.contPos = 0;
        this.aniFail();
        setTimeout(() => {
            this.aniFail();
        }, 500);
    }

    aniFail() {
        this.buttomColor(this.failColor)
        setTimeout(() => {
            this.buttomColor(this.originalColor)
            }, 200);
    }

    handleClick = (e) => {
        var num = parseInt(e.target.value)
        switch (num) {
            case 1:
                if (this.contPos === 0) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 2:
                if (this.contPos === 1) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 3:
                if (this.contPos === 2) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 4:
                if (this.contPos === 3) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 5:
                if (this.contPos === 4) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 6:
                if (this.contPos === 5) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 7:
                if (this.contPos === 6) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 8:
                if (this.contPos === 7) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 9:
                if (this.contPos === 8) {
                    this.hit(e)
                }else{
                    this.fail()
                }
                break;
            case 10:
                if (this.contPos === 9) {
                    this.hit(e)
                    this.playSounds(salirMJ);
                    setTimeout(() => {
                        alert("Tarea completada 😎👌");
                        // window.history.back();
                    }, 200);
                }else{
                    this.fail()
                }
                break;
                
            default:
                break;
        }
        
    }

  render() {
      return (
        <React.Fragment>
            <div id="container1" width="600" height="200">
                <canvas className="canvas1" ref={this.canvas} height="466" width="500"/>
                <div className="fila1">
                    <button className="action1" id="uno1" ref={this.buttonUno} value onClick={this.handleClick} />
                    <button className="action1" id="dos1" ref={this.buttonDos} value onClick={this.handleClick} />
                    <button className="action1" id="tres1" ref={this.buttonTres} value onClick={this.handleClick} />
                    <button className="action1" id="cuatro1" ref={this.buttonCuatro} value onClick={this.handleClick} />
                    <button className="action1" id="cinco1" ref={this.buttonCinco} value onClick={this.handleClick} />
                </div>
                <div className="fila2">
                   <button className="action1" id="seis1" ref={this.buttonSeis} value onClick={this.handleClick} />
                    <button className="action1" id="siete1" ref={this.buttonSiete} value onClick={this.handleClick} />
                    <button className="action1" id="ocho1" ref={this.buttonOcho} value onClick={this.handleClick} />
                    <button className="action1" id="nueve1" ref={this.buttonNueve} value onClick={this.handleClick} />
                    <button className="action1" id="diez1" ref={this.buttonDiez} value onClick={this.handleClick} /> 
                </div>
                
            </div>
        </React.Fragment>
        );
    }
}

export default UnlockManifolds;
