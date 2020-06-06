<template>
  <div class="formCont">
    <div class="formLine"></div>
    <span class="regTxt">{{ regStaff }}</span>
    <div class="formDiv">
      <form @submit.prevent>
        <span class="Name"
          ><Icon name="user" :width="18" :height="18" class="formIcon"></Icon
          ><input
            type="text"
            placeholder=" Enter Name"
            v-model="name"
            required
            id="inputName"
          />
        </span>
        <span class="Age"
          ><Icon name="info" :width="18" :height="18" class="formIcon"></Icon
          ><input
            type="number"
            placeholder="Enter Age"
            v-model="age"
            required
            id="inputAge"
            maxlength="2"
            max="60"
            min="18"
          />
        </span>
        <span class="Address"
          ><Icon name="home" :width="18" :height="18" class="formIcon"></Icon
          ><input
            type="text"
            placeholder="Enter Address"
            v-model="address"
            required
            id="inputAdd"
          />
        </span>
        <span class="Role"
          ><Icon name="tag" :width="18" :height="18" class="formIcon"></Icon
          ><select id="selectRole">
            <option value="" disabled selected hidden class="option"
              >Select Role</option
            >
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
        </span>
        <span class="User"
          ><Icon
            name="user-plus"
            :width="18"
            :height="18"
            class="formIcon"
          ></Icon
          ><input
            type="text"
            placeholder="Generate User ID"
            v-model="userId"
            required
            id="genUserId"
          /><button type="button" class="Bt" @click="rndStr(4)">
            <Icon
              name="rotate-cw"
              :width="18"
              :height="18"
              class="formIcon"
            ></Icon>
          </button>
        </span>
        <span class="Password"
          ><Icon name="lock" :width="18" :height="18" class="formIcon"></Icon
          ><input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter Password"
            v-model="password"
            required
            id="inputPass"
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

        <button type="submit" id="staffSubmit" @click="submit">
          Submit
          <Icon name="send" :width="14" :height="14" class="sendIcon"></Icon>
        </button>
      </form>
    </div>
    <div class="imgDiv" v-for="upload in uploads" :key="upload.id">
      <img :src="upload.image" class="imgCont" />
      <div class="buttonCont">
        <input
          type="file"
          name=""
          id="patientImgUploader"
          placeholder="Upload Image"
          style="display: none;"
          @change="onFileChange(upload, $event)"
        />
        <label for="patientImgUploader" class="imgLabel"
          >Upload Picture<Icon
            name="file"
            :width="18"
            :height="18"
            class="right"
          ></Icon
        ></label>
      </div>
    </div>
  </div>
</template>

<script>
import forms from "@/mixins/forms";
import Icon from "@/components/Icon.vue";
export default {
  name: "AddStaff",
  mixins: [forms],
  components: {
    Icon
  },
  data() {
    return {
      name: "",
      age: "",
      address: "",
      userId: "",
      password: "",
      showPassword: false,
      uploads: [
        {
          image: false,
          id: 1
        }
      ]
    };
  },
  methods: {
    onFileChange(upload, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(upload, files[0]);
    },
    createImage(upload, file) {
      var reader = new FileReader();

      reader.onload = e => {
        upload.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    rndStr(len) {
      let num = "";
      let chars = "0123456789";

      for (let i = 0; i < len; i++) {
        num += chars.charAt(Math.floor(Math.random() * chars.length));
        this.userId = "J" + num;
      }
      return num;
    },
    submit() {}
  }
};
</script>

<style scoped></style>
