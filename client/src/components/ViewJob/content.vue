<template>
  <panel title="content">
    <textarea
      readonly
      v-model="job.content"
    ></textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'job'
  ]
}
</script>

<style scoped>
.textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
