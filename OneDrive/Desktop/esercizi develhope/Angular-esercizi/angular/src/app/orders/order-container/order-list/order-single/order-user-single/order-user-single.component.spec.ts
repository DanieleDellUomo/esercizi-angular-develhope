import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUserSingleComponent } from './order-user-single.component';

describe('OrderUserSingleComponent', () => {
  let component: OrderUserSingleComponent;
  let fixture: ComponentFixture<OrderUserSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderUserSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUserSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
