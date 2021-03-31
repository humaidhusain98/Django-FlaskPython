import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAddrComponent } from './select-addr.component';

describe('SelectAddrComponent', () => {
  let component: SelectAddrComponent;
  let fixture: ComponentFixture<SelectAddrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
