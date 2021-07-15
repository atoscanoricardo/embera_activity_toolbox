<template>
  <v-container>
    <div>
      <v-toolbar dark prominent :src="require('../assets/cabecera.jpeg')">
        <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
        <v-toolbar-title>Juwa dia: Saludos</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="mx-auto" tile>
        <v-list-item v-for="(item, i) in items" :key="i" two-line>
          <v-list-item-content>
            <v-list-item-title>Saludo: {{ item.palabra }}</v-list-item-title>
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
              <v-btn x-large color="#FF9800" to="act_Saludos" dark>
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
        palabra: "Kua",
        significado: "Hola",
      },
      {
        palabra: "Kuamera",
        significado: "Buenas",
      },
      {
        palabra: "Zaa ",
        significado: "Buenas",
      },
      {
        palabra: "¿Sawva bupe?",
        significado: "¿Cómo estás?",
      },
      {
        palabra: "Mura bia bua",
        significado: "Estoy bien",
      },
      {
        palabra: "¿kai bu trura?",
        significado: "¿Cómo te llamas?",
      },
      {
        palabra: "Mu trura",
        significado: "Mi nombre es",
      },
      {
        palabra: "Biga",
        significado: "Gracias",
      },
      {
        palabra: "Wa mura",
        significado: "Ya me voy (chao)",
      },
      {
        palabra: "Wa bura",
        significado: "Te vas (adiós)",
      },
    ],
  }),
};
</script>
