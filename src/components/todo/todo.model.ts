export interface ITodoList {
    id: string,
    title: string,
    completed: boolean
}

export interface ITodoListProps {
    todoData: ITodoList[],
    setTodoData: React.Dispatch<React.SetStateAction<ITodoList[]>>,
}

export interface ITodoForm {
    todoInputValue: string,
    setTodoInputValue: React.Dispatch<React.SetStateAction<string>>,
    onSubmitHandler: (event: React.FormEvent) => void
}