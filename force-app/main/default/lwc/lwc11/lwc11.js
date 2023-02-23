import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';


/**
 * Creates Account records.
 */
export default class Lwc11 extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    myFields = ["Name", "Phone", "Industry", "Rating", "Type"];

    
}