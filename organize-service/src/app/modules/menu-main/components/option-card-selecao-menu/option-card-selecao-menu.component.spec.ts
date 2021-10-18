import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCardSelecaoMenuComponent } from './option-card-selecao-menu.component';

describe('OptionCardSelecaoMenuComponent', () => {
  let component: OptionCardSelecaoMenuComponent;
  let fixture: ComponentFixture<OptionCardSelecaoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionCardSelecaoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionCardSelecaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
