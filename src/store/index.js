import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: {
      id: Math.ceil(Math.random() * 1000000),
      title: null,
      comment: null,
      status: "Pending",
    },
    todoEditId: null,
    todoEditIndex: null,
    editTodo: {
      id: null,
      title: null,
      comment: null,
      status: "Pending",
    },
    filterStatus: 'All',
    filterStatusTodos: [],
    searchItem: ''
  },
  getters: {
    todoGet(state) {
      return state.todos = JSON.parse(localStorage.getItem('todolist-vuex'))
    },
    filterStatusTodoGet(state) {
      if (state.filterStatus == 'All') {
        state.filterStatusTodos = state.todos
      }
      else {
        state.filterStatusTodos = state.todos.filter(item => {
          return item.status == state.filterStatus
        })
      }
    },
    searchByInput(state) {
      state.todos = JSON.parse(localStorage.getItem('todolist-vuex'))
      if (state.searchItem != "" && state.todos) {
        state.todos = state.todos.filter(item => {
          return item.title == state.searchItem
        })
      }
    },
  },
  mutations: {
    TODO_ADD(state) {
      if (!state.todos == []) {
        state.todos.push(state.newTodo)
      } else {
        state.todos = []
        state.todos.push({
          id: state.newTodo.id,
          title: state.newTodo.title,
          comment: state.newTodo.comment,
          status: state.newTodo.status,
        })
      }
      state.newTodo = {
        id: Math.ceil(Math.random() * 1000000),
        title: null,
        comment: null,
        status: "Pending",
      }
      let newTodoStringify = JSON.stringify(state.todos)
      localStorage.setItem('todolist-vuex', newTodoStringify)
    },
    TODO_REMOVE(state, data) {
      state.todos.splice(data, 1)
      let newTodoStringify = JSON.stringify(state.todos)
      localStorage.setItem('todolist-vuex', newTodoStringify)
      state.todos = JSON.parse(localStorage.getItem('todolist-vuex'))
    },
    TODO_UPDATE(state) {
      let indexNumber = state.todoEditIndex
      let idNumber = state.todoEditId
      let editTodo = {
        id: state.editTodo.id,
        title: state.editTodo.title,
        comment: state.editTodo.comment,
        status: state.editTodo.status,
      }
      if (idNumber && indexNumber) {
        state.todos.splice(indexNumber, 1, editTodo)
        let newTodoStringify = JSON.stringify(state.todos)
        localStorage.setItem('todolist-vuex', newTodoStringify)
        console.log('success')
      } else if (indexNumber == 0) {
        state.todos.shift()
        state.todos.unshift(editTodo)
        let newTodoStringify = JSON.stringify(state.todos)
        localStorage.setItem('todolist-vuex', newTodoStringify)
        console.log('success')
      } else {
        console.log('error')
      }
    },
  },
  actions: {
    todoAdd({ commit }, data) {
      commit('TODO_ADD', data)
    },
    todoRemove({ commit }, data) {
      commit('TODO_REMOVE', data)
    },
    todoUpdate({ commit }, data) {
      commit('TODO_UPDATE', data)
    }
  },
  modules: {
  }
})
