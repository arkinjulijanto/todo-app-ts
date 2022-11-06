export interface Todo {
    title: string;
    description: string;
}
export interface InitialState {
    _todos: Todo[];
    todos: Todo[];
    todo: Todo | null;
}