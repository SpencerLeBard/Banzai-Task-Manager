<template>
  <div class="col-4 ml-2">
    <div class="rounded bg-secondary p-1" style="min-width: 25%;">
      <div class="card-header d-flex justify-content-between">
        <h4 class="">{{listProp.title}}</h4>
        <div class="buttons">
          <i class="fa fa-plus mr-3 text-success" aria-hidden="true" @click="addTaskToggle = !addTaskToggle"></i>
          <i class="fa fa-trash-o text-danger pointer" @click="deleteList" aria-hidden="true"></i>
        </div>
      </div>
      <form @submit.prevent="addTask" v-if="addTaskToggle">
        <input type="text" class="form-control mb-2" placeholder="add task" v-model="newTask.title" required />
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
      addTaskToggle: false
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
.pointer{
  cursor: pointer;
}
</style>