<template>
  <div class="card">
    <Avatar :width="60" :height="60" class="avatarCard" />

    <Icon name="user" :width="20" :height="20" class="userIcon" />
    <span class="regName"> {{ reg.name }} </span>

    <Icon name="heart" :width="20" :height="20" class="userIcon" />

    <span class="heart" v-if="reason">
      {{ reg.reason }}
    </span>

    <input v-model="reg.reason" class="inputReason" v-if="status" />

    <button class="editIcon" @click="(status = !status)((reason = !reason))">
      <Icon :name="status ? 'check-square' : 'edit'" :width="20" :height="20" />
    </button>

    <Icon name="clock" :width="20" :height="20" class="userIcon" />
    <span class="time"> {{ reg.time }} </span>
    <Icon name="calendar" :width="20" :height="20" class="userIcon" /><span
      class="regDate"
      >{{ reg.date }}</span
    >
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Icon from "@/components/Icon.vue";
import forms from "@/mixins/forms";
export default {
  props: {
    reg: { type: Object, default: () => {} }
  },
  mixins: [forms],
  components: {
    Avatar,
    Icon
  },
  data() {
    return {
      status: false,
      reason: true
    };
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
.editIcon {
  display: block;
  margin-right: 20px;
  margin-top: 22px;
  color: #230e72;
  height: 20px;
  width: 20px;
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
.heart {
  width: 15%;
  color: #230e72;
  font-weight: bold;
  margin: auto;
}
.inputReason {
  width: 15%;
  height: 23px;
  color: #230e72;
  font-weight: bold;
  font-size: 13px;
  margin-top: 22px;
  border: 2.4px solid #230e72;
  padding: 7px;
}
</style>
