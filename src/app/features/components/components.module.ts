import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlienListComponent } from './alien-list/alien-list.component';
import { AlienCardComponent } from './alien-card/alien-card.component';
import { RouterModule } from '@angular/router';
import { FeaturesRoutingModule } from '../features-routing.module';
import { AlienDetailComponent } from './alien-detail/alien-detail.component';
import { CoreComponentsModule } from 'src/app/core/components/corecomponents.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AlienListComponent, AlienCardComponent, AlienDetailComponent],
  imports: [
    CommonModule,
    CoreComponentsModule,
    TranslateModule,
    FeaturesRoutingModule,
    RouterModule,
  ],
  exports: [AlienListComponent, AlienCardComponent, AlienDetailComponent],
})
export class ComponentsModule {}
