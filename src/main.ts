// import './polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AddonModule } from './app/addon/addon.module';

if (window.parent == window.top) {
  console.log('standalone bootstrap');
  platformBrowserDynamic().bootstrapModule(AddonModule);
} else {
  Office.initialize = function (reason) {
    console.log('Office.initialize', reason);
    platformBrowserDynamic().bootstrapModule(AddonModule);
  };
}


