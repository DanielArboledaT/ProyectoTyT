import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoAdminClienteComponent } from './historico-admin-cliente.component';

describe('HistoricoAdminClienteComponent', () => {
  let component: HistoricoAdminClienteComponent;
  let fixture: ComponentFixture<HistoricoAdminClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoAdminClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAdminClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
