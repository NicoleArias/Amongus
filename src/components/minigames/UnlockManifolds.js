import React from "react";
import './css/UnlockManifolds.css';

class UnlockManifolds extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
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
    this.srcImagenFondo = "https://i.imgur.com/ocCwnSO.png";
    
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
        this.imagenFondo.src = this.srcImagenFondo;
        this.imagenFondo.onload = () => {
            this.pintarImagenDeFondo(this.imagenFondo);
        }        

        this.setRandomNumber(this.arrayNumberButton);
    }

    pintarImagenDeFondo(img, context){
        this.ctx.drawImage(img, 0,0 ,976, 869);
    }

    setRandomNumber(e) {
        this.secuencia = this.secuencia.sort(function() {return Math.random() - 0.5});
        var aumValor = 0;
        e.forEach(numButton => {
            numButton.current.value = this.secuencia[aumValor];
            numButton.current.innerHTML = this.secuencia[aumValor];
            aumValor++;
        });
    } 


    buttomColor(color) {
        this.arrayNumberButton.forEach(numButton => {
            numButton.current.style.cssText = color;
        });
    }

    hit(e) {
        e.target.style.cssText = this.hitColor;
    }

    fail() {  
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
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 2:
                if (this.contPos === 1) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 3:
                if (this.contPos === 2) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 4:
                if (this.contPos === 3) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 5:
                if (this.contPos === 4) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 6:
                if (this.contPos === 5) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 7:
                if (this.contPos === 6) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 8:
                if (this.contPos === 7) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 9:
                if (this.contPos === 8) {
                    this.contPos++;
                    this.hit(e)
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
            case 10:
                if (this.contPos === 9) {
                    this.contPos++;
                    this.hit(e)
                    setTimeout(() => {
                        alert("Tarea completada 😎👌");
                        // window.history.back();
                    }, 200);
                }else{
                    this.fail()
                    this.contPos = 0;
                }
                break;
        
            default:
                break;
        }
        
    }
    

  render() {
      return (
        <React.Fragment>
            <div id="container">
                <canvas ref={this.canvas} height="869" width="976" />
                <button className="action" id="uno" ref={this.buttonUno} value onClick={this.handleClick} />
                <button className="action" id="dos" ref={this.buttonDos} value onClick={this.handleClick} />
                <button className="action" id="tres" ref={this.buttonTres} value onClick={this.handleClick} />
                <button className="action" id="cuatro" ref={this.buttonCuatro} value onClick={this.handleClick} />
                <button className="action" id="cinco" ref={this.buttonCinco} value onClick={this.handleClick} />
                <button className="action" id="seis" ref={this.buttonSeis} value onClick={this.handleClick} />
                <button className="action" id="siete" ref={this.buttonSiete} value onClick={this.handleClick} />
                <button className="action" id="ocho" ref={this.buttonOcho} value onClick={this.handleClick} />
                <button className="action" id="nueve" ref={this.buttonNueve} value onClick={this.handleClick} />
                <button className="action" id="diez" ref={this.buttonDiez} value onClick={this.handleClick} />
            </div>
        </React.Fragment>
        );
    }
}

export default UnlockManifolds;
