import './AddTask.css'

export default function AddTask({setShowForm, setDataToEdit}){
  return(
    <div className="button__container">
      <button
        className="button__add"
        onClick={() => {
          setShowForm(true)
          setDataToEdit(null)
        }}
      >
        +
      </button>
    </div>
  )
}