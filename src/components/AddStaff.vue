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
          ><select id="selectRole" v-model="role">
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

        <button id="staffSubmit" @click="snackbar = true">
          Submit
          <Icon name="send" :width="14" :height="14" class="sendIcon"></Icon>
        </button>
        <div class="text-center">
          <v-snackbar color="success" v-model="snackbar" :timeout="timeout">
            {{ text }}
          </v-snackbar>
        </div>
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
import methods from "@/mixins/methods";
import Icon from "@/components/Icon.vue";
import firebase from "firebase";
export default {
  name: "AddStaff",
  mixins: [forms, methods],
  props: {
    hideForm: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    Icon
  },
  data() {
    return {
      name: "",
      age: "",
      address: "",
      userId: "",
      role: "",
      password: "",
      activeForm: null,
      showPassword: false,
      image: false,
      uploads: [
        {
          image: false,
          id: 1
        }
      ],
      snackbar: false,

      text: "Data Saved",
      timeout: 2000
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
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          `${this.userId}@admin.com`,
          this.password
        )
        .then(user => {
          let uid = user.user.uid;
          //   let image;
          //  let imageUpload =  firebase.storage().ref(`/images/${imageNsme}`).put().then(val => image = val.downloadURL)
          //  (imageUpload.snapshot.bytesTransferred/imageUpload.snapshot.totalBytes)*100

          firebase
            .firestore()
            .collection("users")
            .doc(uid)
            .set({
              name: this.name,
              age: this.age,
              address: this.address,
              role: this.role
            });
        })
        .catch(e => {
          console.log(e.message);
        });
      // auth
      //   .signInWithEmailAndPassword(`${this.userId}@admin.com`, this.password)
      //   .then((user) => {
      //     console.log(user);
      //   });
    }
  }
};
</script>

<style scoped></style>
