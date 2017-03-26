
import {
  Component,
  OnInit,
  // ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
// import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'addon',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./addon.styles.scss')
  ],
  template: require('./addon.template.html')
})
export class AddonComponent implements OnInit {

  constructor() {
  }

  public ngOnInit() {
  }

}
