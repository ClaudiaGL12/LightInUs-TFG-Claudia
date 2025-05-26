import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTipoTComponent } from './gestion-tipo-t.component';

describe('GestionTipoTComponent', () => {
  let component: GestionTipoTComponent;
  let fixture: ComponentFixture<GestionTipoTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTipoTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTipoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
