import {ITodoListProps} from './todo.model'

export default function List({todoData, setTodoData}: ITodoListProps) {
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
    <div className="w-full h-[85%] mt-2 p-[10px] bg-gray-100">
      {todoData.map((data) => (
        <div
          key={data.id}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 10px',
            backgroundColor: 'white',
            borderRadius: '5px',
          }}
        >
          <p
            style={{
              width: '80%',
              display: 'flex',
              alignItems: 'center',
              textDecoration: data.completed ? 'line-through' : 'none',
            }}
          >
            <input
              type="checkbox"
              defaultChecked={data.completed}
              style={{
                marginRight: '5px',
              }}
              onChange={() => checkboxOnChangedHandler(data.id)}
            />
            {data.title}
          </p>
          <button
            style={{
              border: 'none',
              fontSize: '0.8rem',
              padding: '2px 7px',
              borderRadius: '50%',
              color: '#fff',
              fontWeight: 'bold',
              backgroundColor: '#91c4ff',
              cursor: 'pointer',
            }}
            onClick={() => todoListOnClickHandler(data.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  )
}
