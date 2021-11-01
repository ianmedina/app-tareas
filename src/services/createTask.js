import {apiUrl, apiVersion} from '.'

export default function createTask(body){

  const url = `${apiUrl}/${apiVersion}/tasks`

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(request => request.json())
    .then(response => response)
}