<template>
  <v-app>
    <c-header></c-header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <c-progress></c-progress>
    <c-footer></c-footer>
  </v-app>
</template>

<script setup>
import CFooter from '@/components/layout/footer'
import CHeader from '@/components/layout/header'
import CProgress from '@/components/layout/progress'

</script>
