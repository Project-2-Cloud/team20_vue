<template>
    <div>
        <h1 class="username">Hello {{getUserName()}} ! </h1>
        <h2 class="username">Register as a teacher</h2>
        <div>
            <form class="registerTeacherForm">
                <div class="row mb-3">
                    <label for="firstname" class="col-sm-3 col-form-label">Firstname</label>
                    <div class="col-sm-5">
                    <input type="text" class="form-control" id="firstname">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="lastname" class="col-sm-3 col-form-label">Lastname</label>
                    <div class="col-sm-5">
                    <input type="text" class="form-control" id="lastname">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="age" class="col-sm-3 col-form-label">Minimum age</label>
                    <div class="col-sm-5">
                    <input type="number" class="form-control" id="age">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="courses" class="col-sm-3 col-form-label">Courses</label>
                    <div class="col-sm-5">
                    <input type="text" class="form-control" id="courses">
                    </div>
                </div>
                 <div class="row mb-3">
                    <label for="price" class="col-sm-3 col-form-label">Price per hour</label>
                    <div class="col-sm-5">
                    <input type="number" class="form-control" id="price">
                    </div>
                </div>
                 <div class="row mb-3">
                    <label for="email" class="col-sm-3 col-form-label">E-mail</label>
                    <div class="col-sm-5">
                    <input type="email" class="form-control" id="email">
                    </div>
                </div>
                   <div class="row mb-3">
                    <label for="description" class="col-sm-3 col-form-label">Short description</label>
                    <div class="col-sm-5">
                    <input type="text" class="form-control" id="description">
                    </div>
                </div>
                <div class="row mb-3">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
                </form>
        </div>
    </div>
</template>

<script>

export default {

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

<style scoped>

.registerTeacherForm {
  width: 50%;
  border: 2px solid #343a40;
  border-radius: 3px;
  margin: 2rem auto;
  padding: 2rem;
}

.registerTeacherForm .row {
    justify-content: center;
}

.registerTeacherForm .btn {
    justify-content: center;
}

.username {
    margin-top: 2rem;
    text-align: center;
}

</style>
