<template>
  <div class="container">
    <h1>Available teachers</h1>
    <div class="container">
      <div class="row">
        <Item v-for="teacher in teachers" 
          :key="teacher.id"
          :item="teacher"
        />
      </div>
    </div>  
  </div>
</template>
	
<script>
// @ is an alias to /src
import Item from "@/Item.vue"	
export default {
  name: 'Home',
  computed: {
    teachers() {
      return this.$store.state.teachers;
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>
.container {
  margin-top: 2rem !important;
}
</style>