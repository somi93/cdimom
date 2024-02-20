<template>
  <v-row justify="center">
    <v-col cols="12" lg="12">
      <v-row class="flex-column" align="center">
        <div>
          <v-row no-gutters>
            <subtitle class="mr-2">{{ $t('layout.menu.services') }}</subtitle>
            <subtitle></subtitle>
          </v-row>
        </div>
        <main-title>Usluge naše kompanije</main-title>
        <p class="mb-4 mt-2 text-center text-primary">If you need to repair or replace your Plumbing system, call today and talk to
          one of our
          Plumbing specialists. They’ll answer all your questions and arrange an appointment at
          your convenience.</p>
      </v-row>
    </v-col>

    <service-card
      v-for="(service, i) in services"
      :key="i"
      :service="service">
    </service-card>
  </v-row>
</template>

<script setup>
import {ref} from 'vue';
import {mdiRulerSquare, mdiFloorPlan, mdiHomeCityOutline, mdiChartLineVariant, mdiWall, mdiFenceElectric} from '@mdi/js'

import Subtitle from "@/components/global/subtitle";
import MainTitle from "@/components/global/MainTitle";
import ServiceCard from "@/components/home/cards/service";

const services = ref([
  {
    title: 'Inženjering',
    icon: mdiRulerSquare
  },
  {
    title: 'Projektovanje i Konsalting',
    icon: mdiFloorPlan
  },
  {
    title: 'Investicije',
    icon: mdiChartLineVariant
  },
  {
    title: 'Generalno izvođenje',
    icon: mdiHomeCityOutline
  },
  {
    title: 'Završni radovi u građevinarstvu',
    icon: mdiWall
  },
  {
    title: 'Elektromontažni radovi',
    icon: mdiFenceElectric
  },
])

</script>

