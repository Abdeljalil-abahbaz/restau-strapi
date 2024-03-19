<template>
  <div>
    <h1>Restaurants</h1>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        <h3>{{ restaurant.attributes.Name }} </h3>
        <br>
        <p>
            {{ restaurant.attributes.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      restaurants: []
    };
  },
  mounted() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      axios.get('https://dazzling-prize-918151c0cf.strapiapp.com/api/restaurants') // Replace with your Strapi API endpoint
        .then(response => {
          this.restaurants = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching restaurants:', error);
        });
    }
  }
};
</script>

<style>
/* Add your component styles here */
</style>
