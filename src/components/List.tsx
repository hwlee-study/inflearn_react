import {todoDataProps} from './list.model'

export default function List({todoData, setTodoData}: todoDataProps) {
  const deleteBtn = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
  }

  const getStyle = (dataCompleted: boolean) => ({
    todoList: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: dataCompleted ? 'line-through' : 'none',
    },
  })

  const todoListOnClickHandler = (id: string) => {
    const filteringTodoData = todoData.filter((data) => data.id !== id)
    setTodoData(filteringTodoData)
  }

  const checkboxOnChangedHandler = (changedId: string) => {
    const toggleTodoData = todoData.map((tdD) => {
      const tmp = tdD
      if (tmp.id === changedId) {
        tmp.completed = !tmp.completed
      }
      return tmp
    })

    setTodoData(toggleTodoData)
  }

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id} style={getStyle(data.completed).todoList}>
          <p>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => checkboxOnChangedHandler(data.id)}
            />
            {data.title}
          </p>
          <button onClick={() => todoListOnClickHandler(data.id)}>X</button>
        </div>
      ))}
    </div>
  )
}
