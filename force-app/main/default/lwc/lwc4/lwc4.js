import { LightningElement } from 'lwc';

export default class Lwc4 extends LightningElement {

    Brand = "Airstream";
    Model = "Flying Cloud";
    Category = "Travel Trailers";
    Price = "$94,400";
    Sleeps = "8";
    Length = "30'";
    pictureURL = "https://cdn.airstream.com/wp-content/uploads/2020/06/2021-Airstream-Flying-Cloud-Street-Side-Exterior.jpg?auto=format&fit=crop&crop=edges&w=540";
    pictureURL2 = "https://cdn.airstream.com/wp-content/uploads/2018/11/FlyingCloud-Sub-Gallery-Exterior-2.jpg?auto=format&fit=crop&crop=edges&w=540";
    pictureURL3 = "https://cdn.airstream.com/wp-content/uploads/2018/11/FlyingCloud-Sub-Gallery-Exterior-4.jpg?auto=format&fit=crop&crop=edges&w=540";

    loanURL1 = "https://fiona.com/partner/investopedia-bridge-page-embed-loans/loans?bridge_partner=alliant-rv&tag.docid=5082108&tag.reqid=n20a87b82b6e14fe0a31d6811c9bd2a9708";
    loanURL2 = "https://fiona.com/partner/investopedia-bridge-page-embed-loans/loans?bridge_partner=sefinancial&tag.docid=5082108&tag.reqid=n20a87b82b6e14fe0a31d6811c9bd2a9708";
    loanURL3 = "https://fiona.com/partner/thebalancebridge/loans?bridge_partner=bank-of-the-west&tag.docid=5082108&tag.reqid=n20a87b82b6e14fe0a31d6811c9bd2a9708";
    loanURL4 = "https://www.lightstream.com/?fact=19969&subid=5082108";


    areDetailsVisible = false;

    handleInputChange(event){
      this.areDetailsVisible = event.target.checked;
    }
  
}