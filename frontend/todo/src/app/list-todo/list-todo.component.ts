import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent {
  //creating a simple to do object
  todos = [
    {
      id: 1,
      description: 'Learn to dance.',
    },
    {
      id: 2,
      description: 'Become expert at programming.',
    },
    {
      id: 3,
      description: 'Visit the moon.',
    },
  ];
}
