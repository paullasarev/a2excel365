import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AddonComponent } from './addon.component';

import { StorageService } from './services/storage-service';

import { ROUTES } from './addon.routes';

@NgModule({
  bootstrap: [AddonComponent],
  declarations: [
    AddonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
  ],
  providers: [
    StorageService,
  ]
})
export class AddonModule {
  constructor(public appRef: ApplicationRef) {
  }
}
