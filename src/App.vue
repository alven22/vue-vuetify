<template>
  <div id="app">
    <v-app id="inspire" light>

      <v-navigation-drawer v-model="drawer" clipped fixed app>
        <v-list dense>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>fas fa-tachometer-alt</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/list">
            <v-list-tile-action>
              <v-icon>fas fa-list</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>List</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Vue Vuetify</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>

      <!-- <v-footer app fixed>
      </v-footer> -->
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
