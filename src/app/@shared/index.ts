import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CardHoverDirective} from './directives/Attributes-Direstives/card-hover.directive';
import {CommonModule} from '@angular/common';
import {GuestDirective} from './directives/Structural-Directives/guest.directive';
import {HtmlPipe} from './pipes/html.pipe';
import {ImgDefaultPipe} from './pipes/img-default.pipe';
import {LocalizeRouterModule} from '@gilsdav/ngx-translate-router';
import {NameSplitPipe} from './pipes/name-split.pipe';
import {SafeUrlPipe} from './pipes/safe-url.pipe';
import {ShowAuthedDirective} from './directives/Structural-Directives/show-authed.directive';
import {SliceTextPipe} from './pipes/slice-text.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {TruncateTextPipe} from './pipes/truncate-text.pipe';
import {MaterialModule} from "@shared/material/material.module";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {ContentLoaderModule} from "@ngneat/content-loader";
import {ContentSkeletonComponent} from "@shared/components/content-skeleton/content-skeleton.component";

/*----------------------   Imports   ----------------------*/
export const imports: any[] = [
  CommonModule,
  TranslateModule,
  LocalizeRouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  LazyLoadImageModule,
  ContentLoaderModule,
];
/*----------------------   PIPES   ----------------------*/
export const pipes: any[] = [
  // GetLengthPipe,
  HtmlPipe,
  ImgDefaultPipe,
  NameSplitPipe,
  SafeUrlPipe,
  SliceTextPipe,
  TruncateTextPipe,
];
/*----------------------   Directives   ----------------------*/
export const directives: any[] = [
  CardHoverDirective,
  ShowAuthedDirective,
  GuestDirective,
  ShowAuthedDirective,
];
/*----------------------   Components   ----------------------*/
export const components: any[] = [
  ContentSkeletonComponent

];
