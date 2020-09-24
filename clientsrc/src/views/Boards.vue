<template>
  <div class="container-fluid japanese-home-picture">
    <div class="row justify-content-center">
      <div
        class="col-4 boards card create-boards-card align-items-center google-fonts text-white m-3 shadow-lg"
      >
        <h5>Create a Board or Pick One You Have Already Made!</h5>
        <form @submit.prevent="addBoard">
          <input
            class="form-control m-3"
            type="text"
            placeholder="Board Title ... "
            v-model="newBoard.title"
            required
          />
          <input
            class="form-control m-3"
            type="text"
            placeholder="Description ..."
            v-model="newBoard.description"
          />
          <button
            class="btn btn-danger m-2 create-board-button bg-danger text-white"
            type="submit"
          >Create Board</button>
        </form>
        <ul class="list-group list-boards m-1 col" v-for="board in boards" :key="board.id">
          <li class="list-group-item">
            <router-link
              class="list-group"
              :to="{name: 'board', params: {boardId: board.id}}"
            >{{board.title}}</router-link>
          </li>
        </ul>
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
  margin-left: vw;
  margin-top: 5vh;
  background-color: rgba(160, 158, 158, 0.596);
  padding: 10px;
}
/* .create-boards-card:hover {
  background-color: #dc3546e8;
  transition: 0.5s ease;
} */

.list-boards {
  justify-content: center;
  width: 25vw;
  transition: 0.25s ease;
  cursor: pointer;
  border-color: black;
  margin-top: 2vh;
}
.list-boards:hover {
  transform: scale(1.07);
}
.list-group-item:hover {
  background-color: rgba(240, 240, 240, 0.925);
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