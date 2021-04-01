import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)


var url;
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    teachers: [],
    inCart: [],
    user: {
      isAuthenticated: false,
      name: "",
      email: "",
      idToken: ""
    },
    endpoints: {
      login: "http://localhost:3000/login",
        teachers: "http://localhost:8000/teachers"
    },
   },
   getters: {
    teachers: state => state.teachers,
    inCart: state => state.inCart,
   },
   mutations: { //synchronous
     setTeachers(state, payload) {
       state.teachers = payload;
     },
     addToCart(state, payload) { 
      console.log(payload);
      state.inCart.push(payload);
     },
     removeFromCart(state, item) { 
       state.inCart.splice(item, 1); 
     },
     logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.email ="";
      state.user.idToken ="";
     },
     login(state, payload) {
      state.user.isAuthenticated = true;
      state.user.name = payload.name;
      state.user.email =payload.email;
      state.user.idToken =payload.idToken;
     },
       setUrls(state) {
           state.endpoints.login = process.env.VUE_APP_AUTH_URL;
           state.endpoints.teachers = process.env.VUE_APP_PRODUCTS_URL;
           url = state.endpoints.teachers;

           console.log(process.env, url);
       }
   },
   actions: { //asynchronous
     async getTeachers(state) {
         console.log("entering function", url);
       const teachers = await fetch(url, { headers });
       console.log("Fetching", teachers);
       const prods = await teachers.json();
       console.log("PRODS", prods);
       state.commit("setTeachers", prods);
       console.log("last",prods);
     }
   },
  modules: {
  }
})
