<script setup lang="ts">

import {onMounted, ref, watchEffect} from "vue";
import router from "@/router";
import { useServerStore } from "@/stores/server";
import { storeToRefs } from "pinia";

let server =ref()
const serverStore = useServerStore() ;
const servers = storeToRefs(serverStore).servers
onMounted(async () => {
  await serverStore.getServers();
  console.log(servers)
})
watchEffect(async ()=>{
  if (server.value){
    console.log( server.value)
    router.push({ name: 'SelectTrain', params: { server: server.value } })
  }
})

</script>

<template>
  <select class="form-select" aria-label="Default select example" v-model="server">
    <option v-for="{ ServerName, ServerCode } in servers" :key="ServerCode" :value="ServerCode">{{ServerName}}</option>
  </select>
</template>

<style scoped>
</style>
