// import './polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AddonModule } from './app/addon/addon.module';

Office.initialize = function (reason) {
  console.log('Office.initialize', reason);
  platformBrowserDynamic().bootstrapModule(AddonModule);
};

let ext: any = window.external;

if (!ext.hasOwnProperty('GetContext')) {
  console.log('standalone bootstrap');
  platformBrowserDynamic().bootstrapModule(AddonModule);
}
