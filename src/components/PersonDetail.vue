<template>
    <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            height="300px"
          >
            <v-layout
              column
              fill-height
            >
              <v-card-title>
                <v-btn dark icon>
                    <router-link tag="v-icon" :to="`/list/`">
                        fas fa-arrow-left
                    </router-link>
                </v-btn>
  
                <v-spacer></v-spacer>
              </v-card-title>
  
              <v-spacer></v-spacer>
  
              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5">{{items.name}}</div>
              </v-card-title>
            </v-layout>
          </v-img>
  
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="blue">fas fa-user-circle</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{items.username}}</v-list-tile-title>
                <v-list-tile-sub-title>Username</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

             <v-list-tile>
              <v-list-tile-action>
                <v-icon color="blue">fas fa-phone</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{items.phone}}</v-list-tile-title>
                <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
              </v-list-tile-content>
  
            </v-list-tile>
  
            <v-divider inset></v-divider>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="blue">fas fa-envelope</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{items.email}}</v-list-tile-title>
                <v-list-tile-sub-title>Email</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="blue">fas fa-globe</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{items.website}}</v-list-tile-title>
                <v-list-tile-sub-title>Website</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
  
            <v-divider inset></v-divider>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="blue">fas fa-map-marker-alt</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{items.address.street}} {{items.address.suite}}</v-list-tile-title>
                <v-list-tile-sub-title>{{items.address.city}}, {{items.address.zipcode}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
const axios = require('axios');

export default {
  name: "PesonDetail",
  props: ['id'],
  data () {
      return {
          items: []

      }
    
  },
  mounted() {
       axios.get('https://jsonplaceholder.typicode.com/users', {
          params: {
            id: this.id
          }
        })
        .then(response => {
          this.items = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
  }
    
};
</script>

<style scoped>
</style>