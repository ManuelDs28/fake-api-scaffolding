const httpClient = axios.create({
  baseURL: 'http://localhost:8000/courses'
})

const deleteCourse = (id) => httpClient.delete(`/${id}`)
  .then(() => {
    document.getElementById(`course-${id}`).remove()
  })
  .catch(err => console.error(err))

document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.onclick = (event) => {
    btn.classList.add('disabled')
    deleteCourse(event.target.value)
  }
})