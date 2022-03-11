import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeVisualizarComponent } from './icone-visualizar.component';

describe('IconeVisualizarComponent', () => {
  let component: IconeVisualizarComponent;
  let fixture: ComponentFixture<IconeVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconeVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
