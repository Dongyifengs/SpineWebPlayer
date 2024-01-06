import { createApp } from 'vue'
import './style.css'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// https://github.com/cambridgejames/NodeEditor3-vue/blob/develop/docs/guide/quick-start.md
import NodeEditor from "node-editor3-vue";
import "node-editor3-vue/lib/bundle.min.css";
import App from './App.vue'
const app = createApp(App);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(NodeEditor);
app.mount("#app");