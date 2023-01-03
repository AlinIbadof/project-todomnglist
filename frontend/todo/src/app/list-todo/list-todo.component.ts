import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

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
export class ListTodoComponent implements OnInit {
  todos!: Todo[];

  message: string = '';

  constructor(private todoService: TodoDataService, private router: Router) {}

  //creating a simple to do object
  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Alin').subscribe((response) => {
      this.todos = response;
    });
  }

  deleteTodo(id: any) {
    this.todoService.deleteTodo('alin', id).subscribe((response) => {
      this.message = `Delete of todo ${id} was successful.`;
      this.refreshTodos();
    });
  }

  updateTodo(id: any) {
    this.router.navigate(['todos', id]);
  }
}
