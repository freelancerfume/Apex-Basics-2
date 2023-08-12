import { LightningElement } from 'lwc';

export default class Lwccalculator extends LightningElement {

    firstNum;
    secondNum;
    result;

    handleNumberOneChange(event){
        this.firstNum = parseInt(event.target.value);
    }
    handleNumberTwoChange(event){
        this.secondNum = parseInt(event.target.value);
    }
    handleClickSum(){
        this.result = parseInt(this.firstNum) + parseInt(this.secondNum);
    }
    handleClickSub(){
        this.result = parseInt(this.firstNum) - parseInt(this.secondNum);
    }
    handleClickMul(){
        this.result = parseInt(this.firstNum) * parseInt(this.secondNum);
    }
    handleClickDiv(){
        this.result = parseInt(this.firstNum) / parseInt(this.secondNum);
    }
}