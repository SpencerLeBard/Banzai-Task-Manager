<template>
  <div class="col-12 taskComp">
    <div class="rounded">
      <p class="card-header d-flex justify-content-between">{{taskProp.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "task-component",
  mounted() {
    
  },
  computed: {
    
  },
  props: ["taskProp"],
  components: {
  },
}
</script>

<style>

</style>