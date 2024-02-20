/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from '@/plugins'
import App from './App.vue'
import router from '@/router'
import i18n from '@/i18n'
import {createApp} from 'vue'


const app = createApp(App)
app.use(i18n);
app.use(router)
registerPlugins(app)

app.mount('#app')
