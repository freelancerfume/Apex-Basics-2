import { LightningElement } from 'lwc';

export default class Lwc3 extends LightningElement {
    textValue;

    handleInputChange(event) {
        this.textValue = event.detail.value;
    }

    handleButtonClick(event) {
        alert("You resetted the name");
        this.textValue = "User";
    }

}