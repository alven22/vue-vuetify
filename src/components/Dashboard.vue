<template>
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="blue">
            <v-toolbar-title class="text-xs-center">Persons</v-toolbar-title>
  
            <v-spacer></v-spacer>
          </v-toolbar>
  
          <v-list subheader>
            <v-subheader>List</v-subheader>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              
            >
              <v-list-tile-avatar>
                <v-icon>fas fa-user-circle</v-icon>
              </v-list-tile-avatar>
  
              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
              </v-list-tile-content>
  
              <v-list-tile-action>
                <v-icon>fas fa-comment-alt</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
  
          <v-divider></v-divider>
  
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Dashboard',
  data () {
    return {
      items: []
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.items = response.data
    }).catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>

</style>