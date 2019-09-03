import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlusComponent } from './lista-plus.component';
<<<<<<< HEAD
=======
import { NuevaTareaComponent } from '../nueva-tarea/nueva-tarea.component';
import { TareaComponent } from '../tarea/tarea.component';
import { FormsModule } from '@angular/forms';
>>>>>>> master

describe('ListaPlusComponent', () => {
  let component: ListaPlusComponent;
  let fixture: ComponentFixture<ListaPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ ListaPlusComponent ]
=======
      declarations: [
        ListaPlusComponent,
        NuevaTareaComponent,
        TareaComponent],
        imports: [FormsModule]
>>>>>>> master
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
