import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlienInterface } from 'src/app/shared/alien-interface';

@Component({
  selector: 'app-alien-card',
  templateUrl: './alien-card.component.html',
  styleUrls: ['./alien-card.component.scss'],
})
export class AlienCardComponent {
  @Input() alien!: AlienInterface;
  urlname!: string;
  constructor(private router: Router, public translate: TranslateService) {
    setTimeout(() => {
      this.urlname = this.alien.name.replace(' ', '_');
    }, 1000);
  }

  goDetails(id: string) {
    this.router.navigate(['list', id]);
  }
}
