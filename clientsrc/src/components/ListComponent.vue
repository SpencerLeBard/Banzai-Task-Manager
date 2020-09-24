<template>
  <div class="col-3">
    <div class="rounded bg-secondary p-1" style="width: 60%; min-height: 70vh;">
      <div class="card-header d-flex justify-content-end">
        <h4 class="pr-5">{{listProp.title}}</h4>
        <div class="btn-group dropright">
          <i class="fa fa-ellipsis-v btn" aria-hidden="true" role="button" data-toggle="dropdown"></i>
          <div class="dropdown-menu ml-4">
            <p class="btn" @click="addTaskToggle = !addTaskToggle">Add Task</p>
            <p class="btn" @click="deleteList">Delete List</p>
          </div>
        </div>
      </div>
      <form @submit.prevent="addTask" v-if="addTaskToggle">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="add task"
          v-model="newTask.title"
          required
        />
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
      addTaskToggle: false,
    };
  },
  methods: {
    addTask() {
      console.log(this.newTask);
      this.$store.dispatch("addTask", this.newTask);
      this.addTaskToggle = !this.addTaskToggle;
    },
    deleteList() {
      this.$store.dispatch("deleteList", this.listProp.id);
    },
  },
  components: { TaskComponent },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>