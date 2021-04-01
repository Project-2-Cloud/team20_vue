<template>
  <div class="col-sm-4 item">
    <div class="card">
      <img :src="item.image_url" class="card-img-top grow" alt="" />
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h5 class="card-title">{{ item.firstName }} {{ item.lastName }}</h5>
            <h6 class="card-subtitle mb-4 text-muted">
              {{ item.age }} years old
            </h6>
          </li>
          <li class="list-group-item">
            <p class="card-text">{{ item.description | shortDescription }}</p>
            <p class="card-text">
              {{ item.courses.substring(1, item.courses.length - 1) | shortDescription }}
            </p>
            <p class="card-text">€{{ item.pricePerHour }}/h</p>
          </li>
          <li class="list-group-item">
            <select class="custom-select" v-model="course">
              <option disabled value="">Choose a course</option>
              <option v-for="(itemCourse, idx) in getCourses(item)" :key="idx">
                {{itemCourse}}
              </option>
            </select>
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                placeholder="Hours to hire"
                id="hours"
                name="hours"
                min="1"
                max="100"
                v-model="hours"
              />
              <div class="input-group-append" id="button-hours">
                <button
                  class="btn btn-secondary"
                  type="button"
                  :disabled="item.quantity === 0"
                  @click="addToCart(item)"
                >
                  Hire
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["item"],
  data() {
    return {
      size: "",
      hours: "",
      course: "",
    };
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 70) {
        return value.substring(0, 70) + "...";
      } else {
        return value;
      }
    },
  },
  methods: {
    addToCart(item) {
      if (!this.hours || !this.course) {
        return;
      }
      console.log(this.course)
      this.$store.commit("addToCart", {
        item: item,
        hours: this.hours,
        course: this.course,
      });
    },
    getCourses(item) {
      console.log(item.courses.split(", "));
      var notSplitted = item.courses.substring(1, item.courses.length - 1);
      return notSplitted.split(", ");
    },
  },
};
</script>

<style scoped>
/* .remain {
  color: #d17581;
} */

.card-text {
  font-family: Catamaran, Helvetica, Arial, sans-serif;
}

.custom-select {
  margin-bottom: 1rem;
}

.grow {
  width: auto;
  height: 250px;
  transition: all 0.2s ease-in-out;
  object-fit: cover;
}

.btn {
  border-radius: 0 0.25rem 0.25rem 0 !important;
}

/* .hours {
  margin: auto;
}

.item {
  display: flex;
  content: "";
  padding: 10px 10px;
} */
</style>
