import React from "react";
import './css/PrimeShields.css';
import entrarMJ from "../../sounds/EntrarMJ.m4a"
import salirMJ from "../../sounds/SalirMJ.m4a"
import hitSoundOn from "../../sounds/PrimeShieldsON.m4a"
import hitSoundOff from "../../sounds/PrimeShieldsOff.m4a"
import imagenFondo from "../../img/minigames/primeShields.png"
import imgGreen from "../../img/minigames/shieldWhite.png"
import imgRed from "../../img/minigames/shieldRed.png"


class PrimeShields extends React.Component {
    
    constructor() {
    super(); 
    this.canvas = React.createRef();
    this.ctx = ""
    this.imagenFondo = "";
    this.contPos = 0;

    this.buttonUno = React.createRef();
    this.buttonDos = React.createRef();
    this.buttonTres = React.createRef();
    this.buttonCuatro = React.createRef();
    this.buttonCinco = React.createRef();    
    this.buttonSeis = React.createRef();
    this.buttonSiete = React.createRef();

    this.imgGreen = `background-image: url(${imgGreen});`;
    this.imgRed = `background-image: url(${imgRed});`;

    this.arrayNumberButton = [this.buttonUno, this.buttonDos, this.buttonTres, this.buttonCuatro, 
        this.buttonCinco, this.buttonSeis, this.buttonSiete];
    }
    
    componentDidMount() {
        this.primeShieldLogic()
    }

    primeShieldLogic(){
        this.ctx = this.canvas.current.getContext('2d')

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
        e.forEach(numButton => {
            numButton.current.value = parseInt(Math.random() * 2);

            if (numButton.current.value === "1") {
                this.contPos++;
                if (this.contPos === 7) {
                    this.contPos--;
                    e[parseInt(Math.random() * 7)].current.value = 0
                }
            }
            this.playSounds(entrarMJ);
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

    playSounds(sound) {
        let sounds = new Audio(sound);
        sounds.play();
    }

    handleClick = (e) => {
        if(e.target.value === "0"){
            this.playSounds(hitSoundOn);
            e.target.value = "1";
            this.comprobarCambio(e);
        } 
        else if(e.target.value === "1"){
            this.playSounds(hitSoundOff);
            e.target.value = "0";
            this.comprobarCambio(e);
        }
    }
    
    comprobarCambio(e) {
        if(e.target.value === "1"){
            this.contPos++;
            e.target.style.cssText = this.imgGreen;
            if (this.contPos > 6) {
                this.playSounds(salirMJ);
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
                <canvas ref={this.canvas} height="606" width="606" />
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
