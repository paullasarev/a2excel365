import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AddonComponent } from './addon.component';
import { SearchComponent } from './components/search/search.component';
import { ActionComponent } from './components/action/action.component';
import { FormComponent, FormGroupComponent, FormInputNumberComponent,
  FormInputTextComponent, FormInputPasswordComponent, FormInputTextareaComponent
} from './components/form/form.component';

import { StorageService } from './services/storage-service';

import { ROUTES } from './addon.routes';

@NgModule({
  bootstrap: [AddonComponent],
  declarations: [
    AddonComponent,
    SearchComponent,
    ActionComponent,
    FormComponent,
    FormGroupComponent,
    FormInputNumberComponent,
    FormInputTextComponent,
    FormInputPasswordComponent,
    FormInputTextareaComponent
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
