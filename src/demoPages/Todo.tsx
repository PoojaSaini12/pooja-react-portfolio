import React, { useState } from 'react'

export default function Todo() {
  let [todolist, setTodolist] = useState([]);

let saveTodoList = (event) => {

  let todoname = event.target.todoname.value;

  if (todoname === "") {
    alert("Please enter a task");
    event.preventDefault();
    return;
  }

  if (!todolist.includes(todoname)) {
    let finalTodoList = [...todolist, todoname]
    setTodolist(finalTodoList)

    // ✅ Input clear karne ke liye
    event.target.todoname.value = "";
  }
  else {
    alert("Already exist")
  }

  event.preventDefault();
}

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    )
  })

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="p-6 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-4">
          Todo List
        </h1>

        <form onSubmit={saveTodoList} className="flex gap-2">
          <input
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type='text'
            name='todoname'
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-200">
            Save
          </button>
        </form>

        <ul className="mt-4 space-y-2">
          {list}
        </ul>

      </div>
    </div>
  )
}

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber)
    setTodolist(finalData)
  }

  return (
    <li className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg shadow-sm">

      <span className="text-gray-700">{value}</span>

      <span
        onClick={deleteRow}
        className="cursor-pointer text-red-500 font-bold text-lg hover:text-red-700"
      >
        &times;
      </span>

    </li>
  )
}