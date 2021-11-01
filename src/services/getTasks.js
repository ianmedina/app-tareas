import {apiUrl, apiVersion} from '.'

export default function getTasks(){

  const url = `${apiUrl}/${apiVersion}/tasks`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}