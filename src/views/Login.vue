<template>
  <div id="app">
    <header class="topSect">
      <div class="col-12">
        <img :src="image" class="logo" alt="" />
      </div>
    </header>
    <div class="logoTxt">
      <span>{{ text }} </span>
    </div>
    <div class="loginScr">
      <form action="" @submit.prevent>
        <span class="loginId"
          ><Icon name="user" :width="18" :height="18" class="formIcon"></Icon
          ><input
            type="text"
            placeholder=" Enter User ID"
            v-model="userId"
            required
            id="inputId"
          />
        </span>
        <span class="inputPassword"
          ><Icon name="lock" :width="18" :height="18" class="formIcon"></Icon
          ><input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter Password"
            v-model="password"
            required
            id="loginPass"
          /><button
            type="button"
            @click="showPassword = !showPassword"
            class="Bt"
          >
            <Icon
              :name="showPassword ? 'eye' : 'eye-off'"
              :width="18"
              :height="18"
              class="formIcon"
            ></Icon>
          </button>
        </span>
        <router-link :to="{ name: 'Admin' }"
          ><button type="submit" id="loginBt">
            {{ login }}
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>
<script>
import forms from "@/mixins/forms";
import Icon from "@/components/Icon.vue";
export default {
  name: "Login",
  mixins: [forms],
  components: {
    Icon
  },
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
