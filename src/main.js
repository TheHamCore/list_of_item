import Vue from 'vue';
import App from './App.vue';
import store from './store/store';

new Vue({
    render: h => h(App),
    store,
}).$mount('#app');
    // .use(store)
    // .mount('#app');




