import { useState, useEffect } from 'react'
import Task from '../Task/Task'
import FormTask from '../FormTask/FormTask'
import AddTask from '../AddTask/AddTask'
import getTasks from '../../services/getTasks'
import deleteTask from '../../services/deleteTask'
import createTask from '../../services/createTask'
import updateTask from '../../services/updateTask'
import './ListOfTasks.css'

export default function ListOfTasks(){
  const [data, setData] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(function(){
    getTasks().then(tasks => setData(tasks))
  }, [])

  const deleteData = async (id) => {
    await deleteTask(id)
    let newData = data.filter((task) => task._id !== id)
    setData(newData)
  }

  const createData = async (task) => {
    const newTask = await createTask(task)
    setData([...data, newTask])
  }

  const updateData = async (body) => {
    let {_id, title, description} = body
    const dataUpdate = await updateTask(_id, {title, description})
    let newData = data.map((task) => (task._id === _id ? dataUpdate : task))
    setData(newData)
  }

  return(
    <main className="main">
      {
        (showForm) ?
        <FormTask
          setShowForm={setShowForm}
          dataToEdit={dataToEdit}
          createTask={createData}
          updateTask={updateData}
        /> :
        data.map((task) =>
          <Task
            key={task._id}
            task={task}
            deleteTask={deleteData}
            setShowForm={setShowForm}
            setDataToEdit={setDataToEdit}
          />
        )
      }
      <AddTask
        setShowForm={setShowForm}
        setDataToEdit={setDataToEdit}
      />
    </main>
  )
}