import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  todoForm: FormGroup;
  todos: FormArray;

  constructor(private fb: FormBuilder) {
    this.todos = fb.array([
      fb.control('')
    ]);
    this.todoForm = fb.group({
      todos: this.todos
    })
  }

  addNewTodo() {
    this.todos.push(this.fb.control(''));
  }

  removeTodo(index: number) {
    this.todos.removeAt(index);
  }

  submitTodos() {
    console.log(this.todoForm.value);
  }
}
