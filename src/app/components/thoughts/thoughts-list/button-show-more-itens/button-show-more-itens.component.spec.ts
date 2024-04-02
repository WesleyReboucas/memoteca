import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowMoreItensComponent } from './button-show-more-itens.component';

describe('ButtonShowMoreItensComponent', () => {
  let component: ButtonShowMoreItensComponent;
  let fixture: ComponentFixture<ButtonShowMoreItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonShowMoreItensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonShowMoreItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
