import { LightningElement,wire,track } from 'lwc';
// import apex class method. 
import retrive from '@salesforce/apex/accountLWCController.retrive';
export default class AccountComponent extends LightningElement {
  // wire 
//@wire(retrive) accounts;

@track multiaccounts;

  // imperative

connectedCallback(){

    retrive()
    .then(data=>{
this.multiaccounts=data;


    })
    .catch();


}


}