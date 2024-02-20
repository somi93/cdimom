<template>
  <v-row
    id="clients"
    align="stretch"
    justify="end"
    style="min-height: 450px;position: relative;background-color: #1b1b2e"
    class="text-white">
    <div class="clients-pattern"></div>
    <v-col cols="12" lg="4">
      <v-row class="fill-height flex-column" no-gutters justify="center">
        <div>
          <subtitle class="mr-2">Klijenti</subtitle>
        </div>
        <h2 style="font-size: 45px;line-height: 45px" class="my-4 font-weight-bold">
          We Help You Build On Your Past & Future.
        </h2>
        <p class="text-grey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley..</p>
      </v-row>
    </v-col>
    <v-col cols="12" lg="6" class="py-0">
      <v-row class="fill-height" align="stretch" no-gutters>
        <template v-for="client in clients">
          <client-card :client="client"></client-card>
        </template>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import {ref} from 'vue'
import Subtitle from "@/components/global/subtitle";
import ClientCard from '@/components/home/cards/client'

const clients = ref([
  {
    image: 'https://www.grakomsn.com/wp-content/uploads/2023/11/logo.svg',
    width: '40%'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Logo_of_Belgrade_Nikola_Tesla_Airport.svg/320px-Logo_of_Belgrade_Nikola_Tesla_Airport.svg.png',
    width: '60%'
  },
  {
    image: 'https://jadran-bg.rs/wp-content/uploads/2022/07/02.png',
    width: '120%'
  },
  {
    image: 'https://jadran-bg.rs/wp-content/uploads/2022/07/03.png',
    width: '110%'
  },
  {
    image: 'https://vrticuniverzum.com/wp-content/uploads/2015/10/unverzum-logo.png',
    width: '60%'
  },
  {
    image: 'https://jadran-bg.rs/wp-content/uploads/2022/07/05.png',
    width: '120%'
  },
])
</script>

<style>
.clients-pattern {
  background-image: url("https://wordpress.zozothemes.com/beruco/wp-content/uploads/sites/11/2023/09/roofs-img.png");
  position: absolute;
  background-position: top left;
  background-repeat: no-repeat;
  opacity: 0.06;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  width: 100%;
  height: 100%;
}
</style>
