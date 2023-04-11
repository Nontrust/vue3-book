import { createApp } from 'vue'
import App from './App.vue'
import idbPlugin from './plugins/idb'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import moment from 'moment'

const app = createApp(App)

moment.locale('ko')
const today = moment().format('YYYY-MM-DD')

app.provide('today',today)
app.use(idbPlugin)
app.mount('#app')
