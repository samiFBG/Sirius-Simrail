import { defineStore } from 'pinia'
import { getServers } from "@/service/api";
import type { Server } from "@/types/server";


export const useServerStore = defineStore('server', {
  state: () => ({
    servers:  [] as Server[],
  }),
  actions: {
    async getServers(): Promise<Server[] > {
      try {
        this.servers = await getServers();
        console.log(this.servers)
        return this.servers
      } catch (error) {
        // let the form component display the error
        return []
      }
    },
  },
})
