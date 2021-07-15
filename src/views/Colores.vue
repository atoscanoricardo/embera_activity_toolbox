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
              >Significado {{ item.significado }}</v-list-item-subtitle
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
              <v-btn x-large color="#9C27B0" to="act_Colores" dark>
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
  name: "Saludos",
  data: () => ({
    items: [
      {
        palabra: "Paima",
        significado: "Negro",
      },
      {
        palabra: "Torroa",
        significado: "Blanco",
      },
      {
        palabra: "Yi purru",
        significado: "Rojo",
      },
      {
        palabra: "Warrakau",
        significado: "Amarillo",
      },
      {
        palabra: "Yi jega ",
        significado: "Naranjado",
      },
      {
        palabra: "Pawara",
        significado: "Verde",
      },
      {
        palabra: "Aparra umu",
        significado: "Azul",
      },
      {
        palabra: "Egoro kakva",
        significado: "Café",
      },
    ],
  }),
};
</script>
