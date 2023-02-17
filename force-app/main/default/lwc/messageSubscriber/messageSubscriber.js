import { LightningElement,wire } from 'lwc';


import {
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE,
  MessageContext
} from 'lightning/messageService';

import mc from '@salesforce/messageChannel/mc__c'; // mc.messageChannel-meta.xml


export default class MessageSubscriber extends LightningElement {

  datareceived;

  @wire(MessageContext)
    messageContext;


    subscribeToMessageChannel() {
      if (!this.subscription) {
          this.subscription = subscribe(
              this.messageContext,
              mc,
              (message) => this.handleMessage(message),
              { scope: APPLICATION_SCOPE }
          );
      }
  }


// Handler for message received by component
handleMessage(message) {
  console.log('message received ');
  console.log(message);


  this.datareceived = message.recordId;

}


unsubscribeToMessageChannel() {
  unsubscribe(this.subscription);
  this.subscription = null;
}

constructor(){
super();
console.log('constructor is working...');

}


connectedCallback() {

    
  this.subscribeToMessageChannel();


   
}


disconnectedCallback() {
  this.unsubscribeToMessageChannel();
}


errorCallback(err,Stack){

    console.log('errorCallback is working...');

    console.log(err);
    console.log(Stack);
}

renderedCallback(){
    console.log('renderedCallback is working...');

}
}