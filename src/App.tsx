import {useState} from 'react'
import './App.css'
import List from './components/List'
import {todoData} from './components/list.model'

export default function App() {
  const [todoData, setTodoData] = useState<todoData[]>([])

  const [value, setValue] = useState('')

  const inputOnChangeHanlder = (event: any) => {
    setValue(event.target.value)
  }

  const onSubmitHandler = (e: any) => {
    // page reload 되는 것 방지
    e.preventDefault()

    // input에 입력한 값
    const addTodoDatas = {
      id: Date.now().toString(),
      title: value,
      completed: false,
    }

    // Setter에서 이전 state를 가지고 오기 위해서 인수에 함수를 이용해서 사용
    setTodoData((prevTodoData: todoData[]) => [...prevTodoData, addTodoDatas])
    setValue('')
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {/* <List todoData={todoData} setTodoData={setTodoData} /> */}
        <List todoData={todoData} setTodoData={setTodoData} />
        <form style={{display: 'flex'}} onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="value"
            style={{flex: '10', padding: '5px'}}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={inputOnChangeHanlder}
          />
          <input
            type="submit"
            value="입력"
            className="todoSubmit"
            style={{flex: '1'}}
          />
        </form>
      </div>
    </div>
  )
}
