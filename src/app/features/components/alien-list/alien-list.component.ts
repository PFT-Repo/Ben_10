import { Component } from '@angular/core';
import { CoreserviceService } from 'src/app/core/coreservice.service';
import { AlienInterface } from 'src/app/shared/alien-interface';

@Component({
  selector: 'app-alien-list',
  templateUrl: './alien-list.component.html',
  styleUrls: ['./alien-list.component.scss'],
})
export class AlienListComponent {
  aliens!: AlienInterface[];
  constructor(private service: CoreserviceService) {
    service.getSomeData();

    setTimeout(() => {
      this.aliens = service.getData();
      console.log(this.aliens);
    }, 200);
  }
}
