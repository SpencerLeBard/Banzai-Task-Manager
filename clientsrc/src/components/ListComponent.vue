<template>
  <div class="col-3 listComp ml-2">
    <div class="rounded" style="width: 25rem;">
      <h4 class="card-header d-flex justify-content-between">{{listProp.title}}</h4>
      <div class="row tasks">
        <task-component v-for="task in tasks" :key="task.id" :taskProp="task" />
        <!-- Tasks injected here w/ cols -->
      </div>
      <form>
        <input type="text" class="form-control" placeholder="Add task + Enter" required />
      </form>
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
  components: { TaskComponent },
};
</script>

<style>
</style>