export interface Todo {
    title: string;
    description: string;
}
export interface InitialState {
    todos: [];
    todo: Todo | null;
}