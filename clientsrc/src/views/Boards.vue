<template>
  <div class="container-fluid japanese-home-picture">
    <div class="row justify-content-center">
      <div class="col-3 boards card create-boards-card align-items-center google-fonts text-white">
        Create a Board or Pick One You Have Already Made!
        <form @submit.prevent="addBoard">
          <input type="text" placeholder="Board Title ... " v-model="newBoard.title" required />
          <input
            class="m-2"
            type="text"
            placeholder="Description ..."
            v-model="newBoard.description"
          />
          <button class="btn btn-danger m-2 create-board-button" type="submit">Create Board</button>
        </form>
        <div class="card boards-container-card">
          <div class="board-card card" v-for="board in boards" :key="board.id">
            <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
          </div>
        </div>
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
  margin-left: vw;
  margin-top: 5vh;
  background-color: rgba(148, 144, 144, 0.596);
  padding: 10px;
}
.create-boards-card:hover {
  background-color: #dc3546e8;
  transition: 0.5s ease;
}
.boards-container-card {
  width: 15vw;
  align-items: center;
  padding: 2vh;
  background-color: rgba(148, 144, 144, 0.596);
}
.board-card {
  height: 10vh;
  justify-content: center;
  width: 10vw;
  transition: 0.25s ease;
  cursor: pointer;
  border-color: black;
  margin-top: 2vh;
}
.board-card:hover {
  transform: scale(1.25);
}
.create-board-button {
  background-color: white;
  color: black;
  border: black;
}
.create-board-button:hover {
  background-color: black;
  color: white;
}
</style>