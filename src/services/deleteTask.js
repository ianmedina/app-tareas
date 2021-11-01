import {apiUrl, apiVersion} from '.'

export default function deleteTask(idTask){

  const url = `${apiUrl}/${apiVersion}/tasks/${idTask}`

  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}