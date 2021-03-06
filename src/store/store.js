import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
    },
    getters: {
        PRODUCTS (state) {
            return state.products;
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: 'GET'
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            });
        },  
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },   
    }
});

export default store;