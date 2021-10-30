import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaterialesComponent } from './registrar-materiales.component';

describe('RegistrarMaterialesComponent', () => {
  let component: RegistrarMaterialesComponent;
  let fixture: ComponentFixture<RegistrarMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
