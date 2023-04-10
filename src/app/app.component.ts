import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ben_10';
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    const lang = translate.getBrowserLang();
    if (lang != null) {
      translate.use(lang);
    } else {
      translate.use('en');
    }
  }
}
