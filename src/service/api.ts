import type {Server} from "@/types/server";
import type {Train} from "@/types/train";

export const BASE_API_URL : string = "https://simrail-edr.emeraldnetwork.xyz/"


const baseApiCall = async ( url: string ) => {
    const newUrl = BASE_API_URL + url;
    let res = await fetch(newUrl);
    return await res.json();
}

export const getTrains = (serverCode: string): Promise<Train[]> =>
    baseApiCall( `trains/${serverCode}`);

export const getServers = (): Promise<Server[]> =>
    baseApiCall("servers");
