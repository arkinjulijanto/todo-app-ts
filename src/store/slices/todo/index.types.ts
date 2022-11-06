export interface Todo {
    id: number;
    title: string;
    description: string;
}

export interface InitialTodo {
    title: string;
    description: string;
}
export interface InitialState {
    _todos: Todo[];
    todos: Todo[];
    todo: Todo | null;
    id: number
}