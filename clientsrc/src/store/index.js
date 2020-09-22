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
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks(state, tasks) {
      state.tasks = tasks
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
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
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
    async getTasks({ commit }, listId) {
      try {
        let res = await api.get('lists/' + listId + '/tasks')
        commit('setTasks', res.data)
      } catch (error) {
        console.error(error);
      }
    }



    //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
