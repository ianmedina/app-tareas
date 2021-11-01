import {apiUrl, apiVersion} from '.'

export default function updateTask(idTask, body){

  const url = `${apiUrl}/${apiVersion}/tasks/${idTask}`

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(request => request.json())
    .then(response => response)
}