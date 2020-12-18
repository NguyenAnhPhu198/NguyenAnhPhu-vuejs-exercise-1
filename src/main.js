import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/Routerr.js'
const app = createApp(App)
app.use(store,router),
app.mount('#app')
