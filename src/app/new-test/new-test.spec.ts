import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTest } from './new-test';

describe('NewTest', () => {
  let component: NewTest;
  let fixture: ComponentFixture<NewTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTest],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
