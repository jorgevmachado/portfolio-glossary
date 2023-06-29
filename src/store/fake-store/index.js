import fakeStore from '@/api/fakeStore';

export default {
    namespaced: true,
    state: {
        products: [],
        productsInBag: [],
    },
    getters: {
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addToBag(state, product) {
            state.productsInBag.push(product);
            localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
        },
        removeFromBag(state, product) {
            const { id = null} = product;
            if(id) {
                state.productsInBag = state.productsInBag.filter((item) => item.id !== id);
                localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
            }
        },
        loadBags(state, products) {
            state.productsInBag = products;
        }
    },
    actions: {
        async loadProducts({commit}) {
            commit('setLoading', true, {root: true});
            const response = await fakeStore.getProducts();
            commit('setProducts', response);
            commit('setLoading', false, {root: true});
        },
        loadBags({ commit }) {
            if(localStorage.getItem('productsInBag')) {
                commit('loadBags',JSON.parse(localStorage.getItem('productsInBag')));
            }
        },
        addToBag({commit}, product) {
            product.quantity = 1;
            commit('addToBag', product);
        },
        removeFromBag({commit}, product) {
            if(confirm('Are you sure you want to remove this item?')) {
                commit('removeFromBag', product);
            }
        },
    },

};
