import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/css/main.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { createPinia } from "pinia";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Antd);
app.use(router);
app.component("QuillEditor", QuillEditor);
app.mount("#app");
