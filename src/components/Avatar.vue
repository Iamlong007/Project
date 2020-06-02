<template>
  <div>
    <img :src="img" alt="" :width="width" :height="height" class="avatar" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    img: {
      type: [File],
      default: require("../assets/avatar.png")
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  border: 1.5px solid #230e72;
  margin-top: 15px;
  margin-left: 20px;
}
</style>
