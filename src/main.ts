import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import '../node_modules/normalize.css'
import store from './store'


const app = createApp(App)
app.use(store)
app.use(router)
// 按需加载element组件
installElementPlus(app)
app.mount('#app')