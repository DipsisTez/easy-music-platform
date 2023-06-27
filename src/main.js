//Base import a vue
import { createApp } from 'vue';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//Import component
import App from './App';
import router from '@/router/router';
import components  from '@/components/UI/index';

const app = createApp(App);

components.forEach(e => {
    app.component(e.name, e);
})

app
.use(router)
.mount('#app')
