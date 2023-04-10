import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienCardComponent } from './alien-card.component';

describe('AlienCardComponent', () => {
  let component: AlienCardComponent;
  let fixture: ComponentFixture<AlienCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlienCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlienCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
