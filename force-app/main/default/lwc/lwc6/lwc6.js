import { LightningElement } from "lwc";

export default class App extends LightningElement {

  areDetailsVisible = false;

  handleInputChange(event){
    this.areDetailsVisible = event.target.checked;
  }

}