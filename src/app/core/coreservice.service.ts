import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retryWhen, delay, take, catchError } from 'rxjs/operators';
import { AlienInterface } from '../shared/alien-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoreserviceService {
  private apiUrl = 'assets/data/data.json';
  private data!: AlienInterface[];

  constructor(
    private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.getSomeData();
  }

  getSomeData(): void {
    this.http
      .get(this.apiUrl)
      .pipe(
        retryWhen((errors) => errors.pipe(delay(3000), take(3))),
        catchError((error) => {
          console.log('Error occurred:', error);
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.data = <AlienInterface[]>data;
      });
  }

  getData(): AlienInterface[] {
    return this.data;
  }

  getAlien(id: string): AlienInterface {
    if (!(this.data.length > 1)) {
      return <AlienInterface>this.data.find((data) => data.name == id);
    } else {
      this.getSomeData();
      return <AlienInterface>this.data.find((data) => data.name == id);
    }
  }
  goBack() {
    this.location.back();
  }
}
