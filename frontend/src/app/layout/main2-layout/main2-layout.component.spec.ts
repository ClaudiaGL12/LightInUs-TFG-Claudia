import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2LayoutComponent } from './main2-layout.component';

describe('Main2LayoutComponent', () => {
  let component: Main2LayoutComponent;
  let fixture: ComponentFixture<Main2LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main2LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
