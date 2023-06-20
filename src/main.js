import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import router from './router'; // Importa tu archivo de enrutamiento

import App from './App.vue';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css"; 
import "primevue/resources/themes/lara-dark-indigo/theme.css"; 
//core
import "primevue/resources/primevue.min.css";

// cada componente se importa de forma separada +++++++++++++++++++++++++
import Button from "primevue/button"
import Dropdown from "primevue/dropdown"
import Dialog from "primevue/dialog"

const app = createApp(App);

app.use(PrimeVue);
app.use(router); // Usa el enrutador

// aqui agregamos el componente ******************************************
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);

app.mount('#app');
