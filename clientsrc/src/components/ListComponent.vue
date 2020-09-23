<template>
  <div class="col-3 ml-2">
    <div class="rounded" style="min-width: 25rem;">
      <h4 class="card-header d-flex justify-content-between">{{listProp.title}}
        <button @click="deleteList">Delete list</button>
      </h4>
      <form @submit.prevent="addTask">
        <input type="text" placeholder="add task" v-model="newTask.title" required />
      </form>
      
      <div class="row tasks">
        <task-component v-for="task in tasks" :key="task.id" :taskProp="task" />
        <!-- Tasks injected here w/ cols -->
      </div>
    </div>
  </div>
</template>

<script>
import TaskComponent from "../components/TaskComponent";
export default {
  name: "list-component",
  mounted() {
    this.$store.dispatch("getTasks", this.listProp.id);
  },
  props: ["listProp"],
  computed: {
    tasks() {
      return this.$store.state.tasks[this.listProp.id];
    },
  },
  data() {
    return {
      newTask: {
        title: "",
        listId: this.listProp.id,
      },
    };
  },
  methods: {
    addTask() {
      console.log(this.newTask);
      this.$store.dispatch("addTask", this.newTask);
    },
    deleteList() {
      this.$store.dispatch("deleteList", this.listProp.id);
    },
  },
  components: { TaskComponent },
};
</script>

<style>
</style>