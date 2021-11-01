import { useState, useEffect } from 'react';
import './FormTask.css'

const initialForm = {
  _id: null,
  title: '',
  description: ''
}

export default function FormTask({dataToEdit, setShowForm, createTask, updateTask}){
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    (dataToEdit) ? 
    setForm(dataToEdit) :
    setForm(initialForm)
  }, [dataToEdit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.title || !form.description) {
      alert('Datos incompletos')
      return
    }

    if(form._id === null){
      createTask(form)
      setShowForm(false)
    } else {
      updateTask(form)
      setShowForm(false)
    }
  }

  return(
    <div className="form">
      <h2 className="form__title">{(form._id) ? 'Editar esta tarea' : 'Crear nueva tarea' }</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__insert">
          <label htmlFor="title" className="form__label">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={form.title}
            className="form__input"
          />
        </div>
        <div className="form__insert">
          <label htmlFor="description" className="form__label">Descripción</label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={form.description}
            className="form__textarea"
          >
          </textarea>
        </div>
        <div className="form__buttons">
          <input type="submit" value="Enviar" className="form__button"/>
            <button
              type="button"
              className="form__button"
              onClick={() => setShowForm(false)}
            >Regresar</button>
        </div>
      </form>
    </div>
  )
}