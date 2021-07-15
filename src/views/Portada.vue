<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img height="200px" :src="require('../assets/portada.jpeg')">
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-h6 white--text pl-0">
              EmberApp
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn color="white" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
        </v-img>

        <v-card-text>
          <v-container>
            <v-row dense>
              <v-col v-for="(item, i) in items" :key="i" cols="12">
                <v-card :color="item.color" dark elevation="10">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5 font-weight-bold"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="item.resume"></v-card-subtitle>

                      <v-card-actions>
                        <v-btn
                          v-if="item.artist === 'Ellie Goulding'"
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="40px"
                          right
                          width="40px"
                        >
                          <v-icon>mdi-play</v-icon>
                        </v-btn>

                        <v-btn
                          v-else
                          class="ml-2 mt-5"
                          outlined
                          rounded
                          small
                          :to="item.link"
                        >
                          Saber mas...
                        </v-btn>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="require(`../assets/${item.src}`)"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Portada",
  data: () => ({
    items: [
      {
        color: "#4CAF50",
        src: "pronombres.jpeg",
        title: "Pronombres",
        resume: "Mu • Bu • Jari yumakira",
        link: "/pronombres",
      },
      {
        color: "#FF9800",
        src: "saludos.jpeg",
        title: "Saludos",
        resume: "Kua • Zaa • ¿Sawva bupe?",
        link: "/saludos",
      },
      {
        color: "#F44336",
        src: "numeros.jpeg",
        title: "Números",
        resume: "Aba • Ume • Ubea ",
        link: "/numeros",
      },
      {
        color: "#9C27B0",
        src: "colores.jpeg",
        title: "Colores",
        resume: "Wau ume • Bakuru aba",
        link: "/colores",
      },
    ],
  }),
};
</script>
