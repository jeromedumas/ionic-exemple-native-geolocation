import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coords: any;
  accuracy: any;
  error: any;

  constructor(public navCtrl: NavController,
    public geolocation: Geolocation) {
  }

  public getLocation() {
    this.geolocation.getCurrentPosition().then(position => {
      this.coords = position.coords;
      this.accuracy = position.coords.accuracy;
    }).catch((error) => {
      this.error = 'Erreur lors de récupération de la position : ' + error;
    });
  }
}
