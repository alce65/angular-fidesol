import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTareaComponent } from './nueva-tarea.component';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> master

describe('NuevaTareaComponent', () => {
  let component: NuevaTareaComponent;
  let fixture: ComponentFixture<NuevaTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ NuevaTareaComponent ]
=======
      declarations: [ NuevaTareaComponent ],
      imports: [FormsModule]
>>>>>>> master
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
