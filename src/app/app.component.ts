import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Additive';

  constructor(
    private _platform: Platform,
    private _toastCtrl: ToastController
  ) {
    this._platform.ready().then(platform => {
      this.displayToastInstall();
      console.log('hi');
      
    })
  }

  async displayToastInstall(platform = null) {
    // Detects if device is on iOS 
    const isIos = () => {
      const userAgent = platform || window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    console.log(platform, isIos(), !isInStandaloneMode());
    if (isIos() && !isInStandaloneMode()) {
      const toast = await this._toastCtrl.create({
        header: 'Install PWA',
        message: 'la la, lala, lalalala'
      });
      await toast.present();

    }
  }
}
