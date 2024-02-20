<template>
  <v-row justify="center">
    <v-col cols="12" lg="12">
      <v-row class="flex-column" align="center">
        <div>
          <v-row no-gutters>
            <subtitle class="mr-2">Projekti</subtitle>
            <subtitle></subtitle>
          </v-row>
        </div>
        <main-title>Projekti naše kompanije</main-title>
        <p class="mb-4 mt-2 text-center text-primary">If you need to repair or replace your Plumbing system, call today and talk to
          one of our
          Plumbing specialists. They’ll answer all your questions and arrange an appointment at
          your convenience.</p>
      </v-row>
    </v-col>
    <v-col cols="12" lg="6">
      <project :height="624" :project="projects[0]"></project>
    </v-col>
    <v-col cols="12" lg="6">
      <v-row>
        <v-col cols="12">
          <project :project="projects[1]"></project>
        </v-col>
        <v-col cols="12" lg="6">
          <project :project="projects[2]" :info-height="'50%'"></project>
        </v-col>
        <v-col cols="12" lg="6">
          <project :project="projects[3]" :info-height="'50%'"></project>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import {ref} from 'vue';

import Subtitle from "@/components/global/subtitle";
import MainTitle from "@/components/global/MainTitle";
import Project from "@/components/home/cards/project";

const projects = ref([
  {
    title: 'Inženjering',
    image: 'https://jadran-bg.rs/wp-content/uploads/2024/01/Brankov-business-centar-1-Projekat-Jadran-doo.jpg',
    height: 624
  },
  {
    title: 'Projektovanje i Konsalting',
    image: 'https://jadran-bg.rs/wp-content/uploads/2022/01/Odbojkaski-trenazni-centar-Novi-Beograd-Jadran-d.o.o.-Beograd.jpg',
    height: 300
  },
  {
    title: 'Investicije',
    image: 'https://jadran-bg.rs/wp-content/uploads/2019/10/RJ-%E2%80%9EDudova-s%CC%8Cuma-Gerontolos%CC%8Cki-centar-Subotica-Jadran-doo-Beograd-scaled.jpg',
    height: 300,
    infoHeight: '80%'
  },
  {
    title: 'Generalno izvođenje',
    image: 'https://jadran-bg.rs/wp-content/uploads/2019/10/RJ-%E2%80%9EDudova-s%CC%8Cuma-Gerontolos%CC%8Cki-centar-Subotica-2-Jadran-doo-Beograd-scaled.jpg',
    height: 300,
    infoHeight: '80%'
  },
])

</script>

