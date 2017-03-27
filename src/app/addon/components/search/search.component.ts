import {
  Component, ViewEncapsulation,OnInit, OnDestroy,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

// import { User }  from "../../entities/user";

@Component({
  selector: 'search',
  template: require('./search.component.html'),
  styles: [
    require('./search.styles.scss'),
  ],
  providers: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit, OnDestroy {
  public place: string = "";
  public area: string = "";
  public region: string = "";

  constructor(
  ) {
  }

  public ngOnInit() {
  }

  public ngOnDestroy() {
  }

  public onPlaceChange(event) {
    console.log('onPlaceChange', event.detail.value)
  }

  public async doSearch() {
    console.log('doSearch', this.area, this.region);
    await this.run();
  }

  private async run () {

      await Excel.run(async (ctx) => {
        /**
         * Insert your Excel code here
         */
            var application = ctx.workbook.application;
            application.load('calculationMode');
            await ctx.sync();
            console.log('calculationMode', application.calculationMode);
      });

    }
}
