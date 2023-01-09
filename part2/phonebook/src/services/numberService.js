import axios from "axios";

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const addNew = entry => {
  const request = axios.post(baseURL, entry)
  return request.then(response => response.data)
}

const update = (id, updatedEntry) => {
  const request = axios.put(`${baseURL}/${id}`, updatedEntry)
  return request.then(response => response.data)
}

const deleteNumber = (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(response => response)
}

export default { getAll, addNew, deleteNumber, update }