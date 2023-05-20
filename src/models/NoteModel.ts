import type Todo from "./ToDoModel";

export default interface Note {
  title: string;
  todos: Array<Todo>;
  id: number;
}
