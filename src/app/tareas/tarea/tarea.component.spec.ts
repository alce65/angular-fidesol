import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { TareaComponent } from './tarea.component';
=======
import { TareaComponent } from './tarea.component';
import { FormsModule } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';
>>>>>>> master

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ TareaComponent ]
=======
      declarations: [ TareaComponent ],
      imports: [FormsModule]
>>>>>>> master
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
=======
    component.tarea = new TareaModel();
>>>>>>> master
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
