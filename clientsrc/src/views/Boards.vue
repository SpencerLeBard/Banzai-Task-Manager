<template>
  <div class="japanese-home-picture">
    <div class="boards card create-boards-card justify-content-center google-fonts">
      Create a Board or Pick One You Have Already Made!
      <form @submit.prevent="addBoard">
        <input type="text" placeholder="title" v-model="newBoard.title" required />
        <input type="text" placeholder="description" v-model="newBoard.description" />
        <button class="btn btn-danger" type="submit">Create Board</button>
      </form>
      <div class="boards-card card justify-content-center" v-for="board in boards" :key="board.id">
        <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards", this.$route.params.boardId);
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: "",
      },
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
  },
};
</script>
<style scoped>
.create-boards-card {
  width: 50vw;
  margin-left: 25vw;
  height: 25vh;
}
.boards-card {
  height: 10vh;
  justify-content: center;
  width: 10vw;
}
</style>