import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import * as firebase from "firebase";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDahOwGCYVq3FXQa4P6Bd7qc9jfiCCTbM4",
  authDomain: "vue-project-97514.firebaseapp.com",
  databaseURL: "https://vue-project-97514.firebaseio.com",
  projectId: "vue-project-97514",
  storageBucket: "vue-project-97514.appspot.com",
  messagingSenderId: "134541740920",
  appId: "1:134541740920:web:5ccb80dffc49af0fafd68d",
  measurementId: "G-TVYNXDZ5T6"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
