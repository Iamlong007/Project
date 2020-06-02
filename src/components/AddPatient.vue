<template>
  <div class="formCont">
    <div class="formLine"></div>
    <span class="regTxt">{{ regPatient }}</span>
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
        <span class="User"
          ><Icon
            name="user-plus"
            :width="18"
            :height="18"
            class="formIcon"
          ></Icon
          ><input
            type="text"
            placeholder="Generate RFID"
            v-model="id"
            required
            id="genUserId"
          /><button type="button" class="Bt">
            <Icon
              name="rotate-cw"
              :width="18"
              :height="18"
              class="formIcon"
            ></Icon>
          </button>
        </span>
        <div v-for="docUpload in docUploads" :key="docUpload.id" class="flex">
          <input
            type="file"
            name=""
            id="docUploader"
            placeholder="Upload Image"
            style="display: none;"
            @change="
              onDocChange(docUpload, $event)((docVisibility = !docVisibility))
            "
          />
          <label for="docUploader" class="docLabel"
            >Upload Document<Icon
              name="file"
              :width="18"
              :height="18"
              class="right"
            ></Icon
          ></label>
          <img :src="docUpload.image" class="docCont" v-if="docVisibility" />
        </div>
        <button type="submit" id="patientSubmit">
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
  name: "AddPatient",
  mixins: [forms],

  components: {
    Icon
  },

  data() {
    return {
      name: "",
      age: "",
      address: "",
      id: "",
      password: "",
      docVisibility: false,
      uploads: [
        {
          image: false,
          id: 1
        }
      ],
      docUploads: [
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
    onDocChange(docUpload, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createDoc(docUpload, files[0]);
    },
    createDoc(docUpload, file) {
      var reader = new FileReader();

      reader.onload = e => {
        docUpload.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style scoped></style>
