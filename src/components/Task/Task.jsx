import iconDelete from '../../assets/delete.svg'
import iconEdit from '../../assets/edit.svg'
import './Task.css'

export default function Task({task, deleteTask, setShowForm, setDataToEdit}){
  return(
    <article className="task">
      <h2 className="task__title">{task.title}</h2>
      <p className="task__description">{task.description}</p>
      <div className="task__container">
        <button
          className="task__btn"
          onClick={() => {
            setShowForm(true)
            setDataToEdit(task)
          }}
        >
          <img src={iconEdit} alt="Icono de editar" />
        </button>
        <button
          className="task__btn"
          onClick={() => deleteTask(task._id)}
        >
          <img src={iconDelete} alt="Icono de Eliminar" />
        </button>
      </div>
    </article>
  )
}