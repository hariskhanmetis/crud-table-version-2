import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtableComponent } from './childtable.component';

describe('ChildtableComponent', () => {
  let component: ChildtableComponent;
  let fixture: ComponentFixture<ChildtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildtableComponent]
    });
    fixture = TestBed.createComponent(ChildtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
