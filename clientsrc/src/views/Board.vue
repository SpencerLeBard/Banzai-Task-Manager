<template>
  <div class="container-fluid board">
    <button @click="deleteBoard">delete</button>
    <h1 v-if="board.title">{{board.title}}</h1>
    <i
      class="fa fa-pencil text-warning"
      aria-hidden="true"
      @click="editToggle = !editToggle"
      v-if="isCreator"
    ></i>

    <h4 v-if="board.description">{{board.description}}</h4>
    <form onsubmit.prevent="addList">
      <input type="text" placeholder="list name" v-model="newList.title" required />
      <button @click="addList">Add List</button>
    </form>
    <div class="row lists">
      <list-component v-for="list in lists" :key="list.id" :listProp="list" />
      <!-- inject lists here -->
      <!-- <div class="col-3 listComp">
        <div class="rounded" style="width: 25rem;">
          <h4 class="card-header d-flex justify-content-between">3 things on your agenda</h4>
          <ul class="list-group" id="tasks">
            
          </ul>
          <form @click="addTask">
            <input type="text" class="form-control" placeholder="Add list item + Enter" required />
          </form>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent";
import TaskComponent from "../components/TaskComponent";
import CommentComponent from "../components/CommentComponent";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getActiveBoard", this.$route.params.boardId);
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    board() {
      return this.$store.state.activeBoard;
    },
    tasks() {
      return this.$store.state.tasks;
    },
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId,
      },
    };
  },
  props: ["boardId"],
  components: {
    ListComponent,
    TaskComponent,
  },
  methods: {
    deleteBoard() {
      this.$store.dispatch("deleteBoard", this.board.id);
    },
    addList() {
      this.$store.dispatch("addList", this.newList);
    },
  },
};
</script>
