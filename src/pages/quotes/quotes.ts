import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotes: {category: string, quotes: Quote[], icon: string};
  qdetail: Quote[];
  constructor(private alertCtrl: AlertController, private quotesServices: QuotesService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.quotes = this.navParams.data;
    this.qdetail = this.quotes.quotes;
    console.log(this.quotes);
    console.log(this.qdetail);
  }

  onAddQuote(quote: Quote){
    this.quotesServices.addQuoteToFavorites(quote);
  }

  onShowAlert(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the quote to favorites?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.onAddQuote(quote);
            console.log(this.quotesServices);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("NO is clicked");
          }
        }
      ]
    });

    alert.present();
  }

}
