<template>
  <div>
    <button><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: true
};
</script>

<style scoped></style>
