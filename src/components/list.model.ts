export interface todoData {
    id: string,
    title: string,
    completed: boolean
}

export interface todoDataProps {
    todoData: todoData[],
    setTodoData: React.Dispatch<React.SetStateAction<todoData[]>>,
}