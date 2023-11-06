import { defineStore } from 'pinia'
import { getServers, getTrains } from "@/service/api";
import type { Train } from "@/types/train";


export const useTrainStore = defineStore('train', {
  state: () => ({
    trains:  [] as Train[],
  }),
  actions: {
    async getTrains(serverCode : string): Promise<Train[] > {
      try {
        this.trains = (await getTrains(serverCode)).sort((train1:Train,train2:Train)=>parseInt(train1.TrainNoLocal) - parseInt(train2.TrainNoLocal));
        console.log(this.trains)
        return this.trains
      } catch (error) {
        // let the form component display the error
        return []
      }
    },
  },
})
