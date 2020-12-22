import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import '../node_modules/normalize.css'

const app = createApp(App)
// 按需加载element组件
installElementPlus(app)
app.mount('#app')