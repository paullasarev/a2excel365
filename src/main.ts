// import './polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AddonModule } from './app/addon/addon.module';

Office.initialize = function (reason) {
  // angular.bootstrap(document.body, ['my-office-add-in']);
  console.log('Office.initialize', reason)
  platformBrowserDynamic().bootstrapModule(AddonModule);
};

