import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BackBtnComponent, FooterComponent],
  imports: [CommonModule, TranslateModule],
  exports: [BackBtnComponent, FooterComponent],
})
export class CoreComponentsModule {}
