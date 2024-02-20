<template>
  <v-app-bar>
    <v-img height="56px" src="@/assets/img/logo.png"/>
    <v-spacer></v-spacer>

    <v-row no-gutters align="center" justify="end" class="pr-4">
      <template v-for="item in menu">
        <v-btn
          :to="item.to"
          :href="item.href"
          style="text-transform: capitalize"
          class="text-subtitle-1 text-primary">
          {{ item.title }}
        </v-btn>
      </template>
      <div style="width: 140px">
        <v-menu width="140px">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <template #prepend>
                <v-img
                  v-if="locale === 'en'"
                  height="24px"
                  width="24px"
                  src="@/assets/img/lang/en.png"
                  style="filter: drop-shadow(rgb(51, 51, 51) 0px 0px 1px);">
                </v-img>
                <v-img
                  v-else
                  height="24px"
                  width="24px"
                  src="@/assets/img/lang/sr.png"
                  style="filter: drop-shadow(rgb(51, 51, 51) 0px 0px 1px);">
                </v-img>
              </template>
              <v-list-item-title class="pl-2 text-subtitle-1 font-weight-medium text-primary">
                {{ locale === 'en' ? 'English' : 'Srpski' }}
              </v-list-item-title>
            </v-list-item>
          </template>
          <v-list class="py-0">
            <v-list-item @click="changeLocale('en')">
              <template #prepend>
                <v-img
                  height="24px"
                  width="24px"
                  src="@/assets/img/lang/en.png"
                  style="filter: drop-shadow(rgb(51, 51, 51) 0px 0px 1px);"></v-img>
              </template>
              <v-list-item-title class="pl-2 text-primary">English</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="changeLocale('sr')">
              <template #prepend>
                <v-img
                  height="24px"
                  width="24px"
                  src="@/assets/img/lang/sr.png"
                  style="filter: drop-shadow(rgb(51, 51, 51) 0px 0px 1px);"></v-img>
              </template>
              <v-list-item-title class="pl-2 text-primary">Srpski</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-row>
  </v-app-bar>
</template>

<script setup>

import {computed} from "vue";
import {useI18n} from 'vue-i18n'

const {locale, t} = useI18n({useScope: 'global'})


const menu = computed(() => {
  return [
    {
      title: t('layout.menu.about'),
      href: '/#about'
    },
    {
      title: t('layout.menu.services'),
      href: '/#services'
    },
    {
      title: t('layout.menu.projects'),
      href: '/#projects'
    },
    {
      title: t('layout.menu.gallery'),
      to: {name: 'gallery'}
    },
    {
      title: t('layout.menu.career'),
      href: '/#career'
    },
    {
      title: t('layout.menu.contact'),
      href: '/#contact'
    },
  ]
});

const changeLocale = item => {
  locale.value = item;
}
</script>
