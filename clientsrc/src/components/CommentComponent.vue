<template>
  <div class="col-12 comment-comp">
    <div class="rounded">
      <p class="card-header d-flex justify-content-between">{{commentProp.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-component",
  mounted() {},
  computed: {},
  props: ["commentProp"],
  components: {},
};
</script>

<style>
</style>