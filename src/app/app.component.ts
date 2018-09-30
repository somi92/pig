import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = HomePage;
  loader: any;

  constructor(platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {

    this.presentLoading();

    platform.ready().then(() => {
      this.storage.get('introShown').then((result) => {
        // if (false) {
        // this.rootPage = HomePage;
        // } else {
        this.rootPage = IntroPage;
        this.storage.set('introShown', true);
        // }

        this.loader.dismiss();
      });
    });
  }

  private presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: 'Authenticating...',
    });

    this.loader.present();
  }
}

