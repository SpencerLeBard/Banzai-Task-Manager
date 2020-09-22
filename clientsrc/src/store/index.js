import { authProvider } from "@bcwdev/auth0-vue/AuthProvider"
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api } from "./AxiosService"

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {},
    comments: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    createBoard(state, board) {
      state.boards.push(board)
    },
    setLists(state, lists) {
      state.lists = lists
    },
    createList(state, lists) {
      state.lists = lists
    },
    setTasks(state, data) {
      Vue.set(state.tasks, data.listId, data.tasks)
    },
    setComments(state, data) {
      Vue.set(state.comments, data.taskId, data.comments)
    }
  },

  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --

    async getBoards({ commit }) {
      try {
        let res = await api.get('boards')
        commit("setBoards", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addBoard({ commit }, boardData) {
      try {
        let res = await api.post('boards', boardData)
        commit("createBoard", res.data)
      } catch (error) {
        console.error(error);
      }
    },

    async getActiveBoard({ commit }, boardId) {
      try {
        let res = await api.get('boards/' + boardId)
        commit('setActiveBoard', res.data)
        this.dispatch("getLists", boardId);
      } catch (error) {
        console.error(error);
      }
    },
    async getLists({ commit }, boardId) {
      try {
        let res = await api.get('boards/' + boardId + '/lists')
        commit('setLists', res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addList({ commit, dispatch }, listData) {
      try {
        let res = await api.post('lists', listData)
        commit("createList", res.data)
      } catch (error) {
        console.error(error);
      }
    },

    async getTasks({ commit }, listId) {
      try {
        let res = await api.get('lists/' + listId + '/tasks')
        commit('setTasks', { tasks: res.data, listId: listId })
      } catch (error) {
        console.error(error);
      }
    },
    async getComments({ commit }, taskId) {
      try {
        let res = await api.get('tasks/' + taskId + '/comments')
        commit('setComments', { comments: res.data, taskId: taskId })
      } catch (error) {
        console.error(error);
      }
    }



    //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
