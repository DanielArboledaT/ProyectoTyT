import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarVendedorComponent } from './insertar-vendedor.component';

describe('InsertarVendedorComponent', () => {
  let component: InsertarVendedorComponent;
  let fixture: ComponentFixture<InsertarVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
