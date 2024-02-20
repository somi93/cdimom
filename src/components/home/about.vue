<template>
  <v-row justify="center">
    <v-col cols="12" lg="4">
      <subtitle>{{ $t('layout.menu.about') }}</subtitle>
      <main-title>{{ $t('home.about.history') }}</main-title>
    </v-col>
    <v-col cols="12" lg="8">
      <div>
        <p class="text-primary font-weight-bold text-h4 mb-6">
          {{ $t('home.about.title') }}
        </p>
        <p class="text-primary">
          {{ $t('home.about.description') }}
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Subtitle from "@/components/global/subtitle";
import MainTitle from "@/components/global/MainTitle";

export default {
  components: {MainTitle, Subtitle}
}
</script>
