import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(
      `http://localhost:8081/users/${username}/todos`
    );
  }

  deleteTodo(username: string, id: any) {
    return this.http.delete(
      `http://localhost:8081/users/${username}/todos/${id}`
    );
  }

  retrieveTodo(username: string, id: any) {
    return this.http.get<Todo>(
      `http://localhost:8081/users/${username}/todos/${id}`
    );
  }
}
