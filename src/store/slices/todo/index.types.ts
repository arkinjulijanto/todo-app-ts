export interface Todo {
    title: string;
    description: string;
}
export interface InitialState {
    todos: [];
    _todos: [];
    todo: Todo | null;
}