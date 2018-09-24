<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        Person's List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <router-link tag="tr" class="table_cursor" :to="`/detail/${props.item.id}`">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.username }}</td>
            <td>{{ props.item.email }}</td>
            <td>{{ props.item.address.city }}</td>
            <td>{{ props.item.phone }}</td>
            <td>{{ props.item.website }}</td>
            <td>{{ props.item.company.name }}</td>
          </router-link>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
const axios = require('axios');

export default {
  name: "PesonList",
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'City', value: 'city' },
        { text: 'Phone', value: 'phone' },
        { text: 'Website', value: 'website' },
        { text: 'Company', value: 'company' }
      ],
      desserts: []
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.desserts = response.data
    }).catch(error => {
      console.log(error);
    })
  }
  
};
</script>

<style scoped>
.table_cursor {
  cursor: pointer;
}
</style>