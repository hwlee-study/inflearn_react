import {ITodoForm} from './todo.model'

export default function Form({
  todoInputValue,
  setTodoInputValue,
  onSubmitHandler,
}: ITodoForm) {
  const inputOnChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue(event.target.value)
  }

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
      }}
      onSubmit={onSubmitHandler}
    >
      <input
        type="text"
        name="value"
        style={{width: '89%', border: '1px solid #ccc', padding: '5px'}}
        placeholder="해야 할 일을 입력하세요."
        value={todoInputValue}
        onChange={inputOnChangeHanlder}
      />
      <input
        type="submit"
        value="입력"
        style={{
          width: '10%',
          border: '2px solid #91c4ff',
          color: '#91c4ff',
          fontWeight: 'bold',
          borderRadius: '5px',
        }}
      />
    </form>
  )
}
