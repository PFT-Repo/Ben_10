import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienDetailComponent } from './alien-detail.component';

describe('AlienDetailComponent', () => {
  let component: AlienDetailComponent;
  let fixture: ComponentFixture<AlienDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlienDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
