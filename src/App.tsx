import React, {useState} from 'react'
import Form from './components/todo/Form'
import List from './components/todo/List'
import {ITodoList} from './components/todo/todo.model'

export default function App() {
  const [todoData, setTodoData] = useState<ITodoList[]>([])

  const [todoInputValue, setTodoInputValue] = useState('')

  const onSubmitHandler = (event: React.FormEvent) => {
    // page reload 되는 것 방지
    event.preventDefault()

    // input에 입력한 값
    const addTodoDatas = {
      id: Date.now().toString(),
      title: todoInputValue,
      completed: false,
    }

    // Setter에서 이전 state를 가지고 오기 위해서 인수에 함수를 이용해서 사용
    setTodoData((prevTodoData: ITodoList[]) => [...prevTodoData, addTodoDatas])
    setTodoInputValue('')
  }

  return (
    <div className="w-screen h-screen">
      <div
        className="
      w-[600px]
      h-[680px]
      m-auto
      p-[30px]
      mt-[50px]
      bg-white
      rounded
      border
      border-gray-100
      shadow-[-9px_17px_13px_rgba(0,0,0,16%)]"
      >
        <h1 className="text-xl font-bold p-[10px] border-b">할 일 목록</h1>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form
          todoInputValue={todoInputValue}
          setTodoInputValue={setTodoInputValue}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
    </div>
  )
}
