<template>
  <v-container>
    <div>
      <v-toolbar dark prominent :src="require('../assets/cabecera.jpeg')">
        <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
        <v-toolbar-title>Iru jarai: Pronombres</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="mx-auto" tile>
        <v-list-item v-for="(item, i) in items" :key="i" two-line>
          <v-list-item-content>
            <v-list-item-title>Pronombre: {{ item.palabra }}</v-list-item-title>
            <v-list-item-subtitle
              >Significado: {{ item.significado }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <div>
      <v-row align="center">
        <v-col cols="12" sm="12">
          <div class="text-center">
            <div class="my-2">
              <v-btn x-large color="#4CAF50" to="act_Pronombres" dark>
                Actividades
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Pronombres",
  data: () => ({
    items: [
      {
        palabra: "Mu",
        significado: "Yo",
      },
      {
        palabra: "Bu ",
        significado: "Tú",
      },
      {
        palabra: "Jari yumakira",
        significado: "Él",
      },
      {
        palabra: "Jari yuwera",
        significado: "Ella",
      },
      {
        palabra: "Daira",
        significado: "Nosotros",
      },
      {
        palabra: "Mara",
        significado: "Ustedes",
      },
      {
        palabra: "Jarira yuwerara",
        significado: "Ellos",
      },
      {
        palabra: "Jarira yumakirara",
        significado: "Ellas",
      },
    ],
  }),
};
</script>
