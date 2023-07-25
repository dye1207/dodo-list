const hostUrl = 'http://localhost:4000'

const todoService = {
    getTodoList: () => axios.get(`${hostUrl}/todos`),
    registTodo: (content) => axios.post(`${hostUrl}/todos/`, { content, checked: false}),
    deleteTodo: (id) => axios.delete(`${hostUrl}/todos/` +id),
    updateTodo: (id, params) => axios.put(`${hostUrl}/todos/${id}`, params)
}