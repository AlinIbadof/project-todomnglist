import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService
        .retrieveTodo('alin', this.id)
        .subscribe((response) => (this.todo = response));
    }
  }

  saveTodo() {
    if (this.id == -1) {
      //create
      this.todoService.createTodo('alin', this.todo).subscribe((response) => {
        console.log(response);
        this.router.navigate(['todos']);
      });
    } else {
      this.todoService
        .updateTodo('alin', this.id, this.todo)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['todos']);
        });
    }
  }
}
