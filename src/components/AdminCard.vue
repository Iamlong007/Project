<template>
  <div class="card">
    <Avatar :src="dps" :width="60" :height="60" class="avatarCard" />

    <Icon name="user" :width="20" :height="20" class="userIcon" />
    <span class="regName"> {{ reg.name }} </span>
    <Icon name="clock" :width="20" :height="20" class="userIcon" />
    <span class="time"> {{ reg.time }} </span>
    <Icon name="calendar" :width="20" :height="20" class="userIcon" /><span
      class="regDate"
      >{{ reg.date }}</span
    ><Icon name="users" :width="20" :height="20" class="userIcon" /><span
      class="staff"
    >
      {{ reg.category }}</span
    >
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Icon from "@/components/Icon.vue";
export default {
  props: {
    reg: Object,
    dps: require("../assets/igbo.jpeg")
  },
  components: {
    Avatar,
    Icon
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.card {
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: 3px solid #ffffff;
  display: flex;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 10px;
}
:hover.card {
  transform: scale(1.02);
  transition: 0.3s;
}
.avatarCard {
  float: left;
  margin-top: -12px;
  margin-left: -15px;
  position: inherit;
}
.userIcon {
  margin-left: 15px;
  color: #230e72;
}
span {
  margin-top: 21px;
}
.regName {
  width: 26%;
  margin-top: 19px;
}
.time {
  width: 15%;
  color: #230e72;
  font-weight: bold;
}
.regDate {
  width: 15%;
  color: #230e72;
  font-size: 17px;
  font-weight: bold;
}
.staff {
  width: 13%;
  color: #230e72;
  font-weight: bold;
}
</style>
