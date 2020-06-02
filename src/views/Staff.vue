<template>
  <div>
    <header class="topSect">
      <div class="col-12">
        <img :src="image" class="logo" alt="" />
      </div>
    </header>
    <div class="adminScr">
      <div class="topBar">
        <div class="searchContainer">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          /><button class="searchIcon">
            <Icon name="search" :width="18" :height="18"></Icon>
          </button>
        </div>
      </div>
      <transition name="fade">
        <component :is="activeForm"></component>
      </transition>
      <div class="adminTopSect">
        <Avatar :src="img" class="avatarAdmin" :width="120" :height="120" />
        <div class="welcomeTxt">
          <span class="welcome">Welcome,</span> <br />
          <span class="name"> Dr. {{ AdminName }}</span>
        </div>
        <div class="dateSect">
          <span class="date"> Date: {{ liveTime }}</span>
          <router-link :to="{ name: 'Login' }" class="logout">
            <Button class="logoutBt">Logout</Button>
          </router-link>
        </div>
      </div>
      <span class="regTitle"><u>Diagnosed</u></span>
      <StaffCard
        class="adminCard"
        v-for="reg in regs"
        :key="reg.id"
        :reg="reg"
      />
      <Button class="arrow"
        ><Icon name="chevron-down" :width="24" :height="24" class="iconDown"
      /></Button>
    </div>
  </div>
</template>

<script>
import forms from "@/mixins/forms";
import methods from "@/mixins/methods";
import Icon from "@/components/Icon.vue";
import AddStaff from "@/components/AddStaff.vue";
import AddPatient from "@/components/AddPatient.vue";
import Avatar from "@/components/Avatar.vue";
import Button from "@/components/Button.vue";
import StaffCard from "@/components/StaffCard.vue";

export default {
  name: "Admin",
  mixins: [forms, methods],
  components: {
    Icon,
    AddStaff,
    AddPatient,
    Avatar,
    Button,
    StaffCard
  },
  data() {
    return {
      activeForm: null,
      name: "",
      age: null,
      address: null,
      img: require("../assets/avatar.png"),
      id: null,
      password: null,
      AdminName: " A.O Ajao AbdulGafar",
      liveTime: "",
      regs: [
        {
          id: 1,
          name: "Mr. Adejoke Lekan",
          time: "12:42 P.M",
          date: "11/03/2020",
          reason: "Headache"
        },
        {
          id: 2,
          name: "Mrs. Okerechi Peace",
          time: "1:37 A.M",
          date: "11/03/2020",
          reason: "Fever"
        },
        {
          id: 3,
          name: "Mrs. Olopa Faith",
          time: "9:17 A.M",
          date: "11/03/2020",
          reason: "Cartarh"
        }
      ]
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  }
};
</script>
<style scoped>
.searchContainer {
  width: 30%;
  height: 2em;
  display: flex;
  margin-left: 70%;
}
</style>
