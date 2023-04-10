import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    PagesModule,
    ComponentsModule,
    TranslateModule,
    RouterModule,
    FeaturesRoutingModule,
  ],
})
export class FeaturesModule {}
