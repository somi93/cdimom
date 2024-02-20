<template>
  <v-footer color="primary">
    <v-row class="flex-column" no-gutters>
      <div class="c-container">
        <v-row justify="start">
          <p class="mx-3">O Nama</p>
          <p class="mx-3">Usluge</p>
          <p class="mx-3">Projekti</p>
          <p class="mx-3">Galerija</p>
          <p class="mx-3">Karijera</p>
          <p class="mx-3">Kontakt</p>
        </v-row>
      </div>
      <v-divider class="mt-3 mb-0"></v-divider>
      <div class="c-container">
        <v-row justify="space-between" align="center">
          <v-col cols="12" lg="8">
            <v-row no-gutters class="fill-height" justify="center">
              <v-col cols="4">
                <img style="height: 50px;max-width: 100%"
                     src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/logo-light.png"/>
              </v-col>
              <v-col cols="8">
                <span class="text-grey">
                CDIMOM - Preduzeće osnovano sa idejom da projektuje i izvodi poslovne, stambene i industrijske
                objekte kao i da razvija poslovanje u oblasti investicionih projekata.
              </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4">
            <v-row no-gutters justify="end">
              <div>
                <div>
                  <v-row no-gutters align="center">
                    <v-icon :icon="mdiMapMarkerOutline" color="secondary" size="32px"></v-icon>
                    <div>
                      <p class="font-weight-regular ml-2 mb-0 text-grey">
                        Oblakovska 47, Beograd
                      </p>
                    </div>
                  </v-row>
                </div>
                <div class="my-4">
                  <v-row no-gutters align="center">
                    <v-icon :icon="mdiEmailOutline" color="secondary" size="32"></v-icon>
                    <div>
                      <p class="font-weight-regular ml-2 mb-0 text-grey">
                        info@example.com
                      </p>
                    </div>
                    <span style="font-size: 1.2rem" class="font-weight-regular ml-3"></span>
                  </v-row>
                </div>
                <div>
                  <v-row no-gutters align="center">
                    <v-icon :icon="mdiPhoneOutline" color="secondary" size="32"></v-icon>
                    <div>
                      <p class="font-weight-regular text-grey ml-3 mb-0">
                        0659247851
                      </p>
                    </div>
                  </v-row>
                </div>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <div class="c-container pb-0">
        <span class="text-grey">© Copyright CDIMOM 2024. Sva prava zadržana.</span>
      </div>
    </v-row>
  </v-footer>
</template>

<script setup>
import {mdiMapMarkerOutline, mdiEmailOutline, mdiPhoneOutline} from '@mdi/js'
</script>
