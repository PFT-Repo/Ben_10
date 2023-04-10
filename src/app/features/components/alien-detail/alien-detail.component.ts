import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoreserviceService } from 'src/app/core/coreservice.service';
import { AlienInterface } from 'src/app/shared/alien-interface';

@Component({
  selector: 'app-alien-detail',
  templateUrl: './alien-detail.component.html',
  styleUrls: ['./alien-detail.component.scss'],
})
export class AlienDetailComponent {
  alienfordetail!: string;
  alien!: AlienInterface;
  constructor(
    private service: CoreserviceService,
    private route: ActivatedRoute,
    public translate: TranslateService
  ) {
    this.route.params.subscribe((params) => {
      this.alienfordetail = params['id'];
      this.alienfordetail = this.alienfordetail.replace('_', ' ');
    });
    setTimeout(() => {
      if (this.alienfordetail) {
        setTimeout(() => {
          this.alien = service.getAlien(this.alienfordetail);
        }, 500);
      }
    }, 20);
  }
}
