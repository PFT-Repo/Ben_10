import { Component } from '@angular/core';
import { CoreserviceService } from '../../coreservice.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss'],
})
export class BackBtnComponent {
  constructor(
    public service: CoreserviceService,
    public translate: TranslateService
  ) {}
}
