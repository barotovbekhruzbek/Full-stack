import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uiComponent from "./ui-component";


const app = createApp(App)
uiComponent.map(component => app.component(component.name, component))

app.use(router)

app.mount('#app')
