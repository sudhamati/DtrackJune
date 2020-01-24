import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgnComponent } from './pgn.component';

describe('PgnComponent', () => {
  let component: PgnComponent;
  let fixture: ComponentFixture<PgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
