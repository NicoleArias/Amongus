import React from "react";
import './css/PrimeShields.css';

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
    this.contPos = 0;
    this.imgGreen = 'background-image: url("https://i.imgur.com/9059Zha.png")';
    this.imgRed = 'background-image: url("https://i.imgur.com/Ibey7vN.png")';
    }
    
    componentDidMount() {
        this.primeShieldLogic()
    }

    primeShieldLogic(){
        const ctx = this.canvas.current.getContext('2d')

        var imagenFondo = new Image();
        imagenFondo.src = "https://i.imgur.com/IMD1Vv8.png";
        imagenFondo.onload = () => {
            this.pintarImagenDeFondo(imagenFondo, ctx);
        }        

        let arrayNumberButton = [this.buttonUno, this.buttonDos, this.buttonTres, this.buttonCuatro, 
            this.buttonCinco, this.buttonSeis, this.buttonSiete];
        this.setRandomNumber(arrayNumberButton);
    }

    pintarImagenDeFondo(img, context){
        context.drawImage(img, 0,0 ,909, 909);
    }

    setRandomNumber(e) {
        e.forEach(numButton => {
            numButton.current.value = parseInt(Math.random() * 2);

            if (numButton.current.value === "1") {
                this.contPos++;
                if (this.contPos === 7) {
                    this.contPos--;
                    e[parseInt(Math.random() * 7)].current.value = 0
                }
            }
        });

        this.buttomImg(e);
    } 
    
    buttomImg(e) {
        e.forEach(numButton => {
            if(numButton.current.value === "0"){
                numButton.current.style.cssText = this.imgRed;
            } 
            else if(numButton.current.value === "1") {
                numButton.current.style.cssText = this.imgGreen;
            }
        });
    }

    handleClick = (e) => {
        if(e.target.value === "0"){
            e.target.value = "1";
            this.comprobarCambio(e);
        } 
        else if(e.target.value === "1"){
            e.target.value = "0";
            this.comprobarCambio(e);
        }
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
            <div id="container3">
                <canvas ref={this.canvas} height="909" width="909" />
                <button className="action3" id="uno3" ref={this.buttonUno} value onClick={this.handleClick} />
                <button className="action3" id="dos3" ref={this.buttonDos} value onClick={this.handleClick} />
                <button className="action3" id="tres3" ref={this.buttonTres} value onClick={this.handleClick} />
                <button className="action3" id="cuatro3" ref={this.buttonCuatro} value onClick={this.handleClick} />
                <button className="action3" id="cinco3" ref={this.buttonCinco} value onClick={this.handleClick} />
                <button className="action3" id="seis3" ref={this.buttonSeis} value onClick={this.handleClick} />
                <button className="action3" id="siete3" ref={this.buttonSiete} value onClick={this.handleClick} />
            </div>
        </React.Fragment>
        );
    }
}

export default PrimeShields;
