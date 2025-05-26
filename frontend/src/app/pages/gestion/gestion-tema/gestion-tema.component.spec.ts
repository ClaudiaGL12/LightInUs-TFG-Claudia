import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTemaComponent } from './gestion-tema.component';

describe('GestionTemaComponent', () => {
  let component: GestionTemaComponent;
  let fixture: ComponentFixture<GestionTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
