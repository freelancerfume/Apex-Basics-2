import { LightningElement,wire,track } from 'lwc';
// import apex class method. 
import retrive from '@salesforce/apex/accountLWCController.retrive';
export default class AccountComponent extends LightningElement {
  @track multiaccounts;
  searchText;
  // wire 
 @wire(retrive,{searchterm:'$searchText'}) accounts;
renderedCallback(){
  console.log(this.accounts);
}
textChangeHandler(event){
this.searchText=event.target.value;
console.log(this.searchText);
}
 connectedCallback(){
  // imperative
  /*
  retrive()
  .then(data=>{
    console.log('retrieved Accounts');
    console.log(data);
this.multiaccounts=data;
  })
  .catch(err=>{
    console.log(err);
  });
  */
 }
}