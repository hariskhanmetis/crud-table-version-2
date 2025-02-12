import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttableComponent } from './parenttable.component';

describe('ParenttableComponent', () => {
  let component: ParenttableComponent;
  let fixture: ComponentFixture<ParenttableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParenttableComponent]
    });
    fixture = TestBed.createComponent(ParenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
