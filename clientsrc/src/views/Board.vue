<template>
  <div class="container-fluid board">
    <h1 v-if="board.title">{{board.title}}</h1>
    <h4 v-if="board.description">{{board.description}}</h4>
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
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
  },
  props: ["boardId"],
  components: {
    ListComponent,
  },
};
</script>
