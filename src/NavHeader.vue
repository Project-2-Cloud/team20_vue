<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark" role="navigation">
    <div class="container">
      <a class="navbar-brand" href="#">BESTUDY</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link js-scroll-trigger"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/teachers" class="nav-link js-scroll-trigger"
              >Teachers</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              v-if="!isAuthenticated"
              class="nav-link js-scroll-trigger"
            >
              <span @click="onLoginClicked">Login</span>
            </router-link>
          </li>
          <ul class="nav navbar-nav">
            <li v-if="isAuthenticated" class="li-pointer nav-item">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ getUserName() }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Account Settings</a>
                  <a @click="onLogoutClicked" class="dropdown-item"
                    >Logout {{ userEmail }}</a
                  >
                </div>
              </div>
            </li>
            <li>
              <ShoppingCart />
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ShoppingCart from "./TeacherHiring.vue";
export default {
  components: { ShoppingCart },
  name: "NavHeader",
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  methods: {
    onLoginClicked() {
      console.log("test");
      window.location = this.$store.state.endpoints.login;
    },
    onLogoutClicked() {
      this.$store.commit("logout");
    },
    getUserName() {
      return this.$store.state.user.name;
    },
  },
};
</script>

