<script setup lang="ts">
import {ref} from "vue";
import {onMounted} from "vue";
import { storeToRefs } from "pinia";
import { useTrainStore } from "@/stores/train";

const props = defineProps(['server']);

let train =ref(null)
const trainStore = useTrainStore() ;
const trains = storeToRefs(trainStore).trains
onMounted(async () => {
  await trainStore.getTrains(props.server);
  console.log(trains)
})

</script>

<template>
  <div>Train in {{ props.server }}</div>
  <select class="form-select" aria-label="Default select example" v-model="train">
    <option v-for="{ TrainNoLocal } in trains " :key="TrainNoLocal" :value="TrainNoLocal">{{TrainNoLocal}}</option>
  </select>
</template>

<style scoped>

</style>
