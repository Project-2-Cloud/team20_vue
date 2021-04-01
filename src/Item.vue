<template>
  <div class="col-sm-4 item">
    <div class="card">
      <img :src="item.image_url" class="card-img-top grow" alt="" />
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h5 class="card-title">{{ item.firstName }} {{ item.lastName }}</h5>
            <h6 class="card-subtitle mb-4 text-muted">{{ item.age }} years old</h6>
          </li>
          <li class="list-group-item">
            <p class="card-text">{{ item.description | shortDescription }}</p>
            <p class="card-text">{{ item.courseSubjects | shortDescription }}</p>
            <p class="card-text">€{{ item.pricePerHour }}/h</p>
          </li>
          <li class="list-group-item">
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
                  <button class="btn btn-secondary" type="button" :disabled="item.quantity === 0" @click="addToCart(item, hours)">
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
    addToCart(item, hours) {
      if (!hours) {
        return;
      }
      this.$store.commit("addToCart", {
        "item": item,
        "hours": hours,
      });
    },
  },
};
</script>

<style scoped>
/* .remain {
  color: #d17581;
} */

.card-text{
  font-family: Catamaran,Helvetica,Arial,sans-serif;
}

.grow {
  width: auto;
  height: 250px;
  transition: all 0.2s ease-in-out;
  object-fit: cover;
}

.btn {
  border-radius: 0 .25rem .25rem 0 !important;
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