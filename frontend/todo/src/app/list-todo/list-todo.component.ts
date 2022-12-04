import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent {
  //creating a simple to do object
  todos = [
    new Todo(1, 'Learn to dance.', false, new Date()),
    new Todo(2, 'Become expert at programming.', false, new Date()),
    new Todo(3, 'Visit the moon.', false, new Date()),
    // {
    //   id: 1,
    //   description: 'Learn to dance.',
    // },
    // {
    //   id: 2,
    //   description: 'Become expert at programming.',
    // },
    // {
    //   id: 3,
    //   description: 'Visit the moon.',
    // },
  ];
}
