<template>
  <div class="container-fluid board">
    <h1 v-if="board.title">{{board.title}}</h1>
    <h4 v-if="board.description">{{board.description}}</h4>
    <h1 v-else>Loading...</h1>
    <div class="row lists">
      <!-- inject lists here -->
      <div class="col-3 listComp">
    <div class="rounded" style="width: 25rem;">
      <h4 class="card-header d-flex justify-content-between">3 things on your agenda </h4>
      <ul class="list-group" id="tasks">
        <!-- //list tasks go here -->
      </ul>
      <form @click="addTask">
        <input type="text" class="form-control" placeholder="Add list item + Enter" required>
      </form>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  mounted() {
    this.$store.dispatch('getActiveBoard', this.$route.params.boardId)
  },
  computed: {
    lists() {
      return this.$store.state.activeLists;
    },
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"]
};
</script>
