type Train = {
    TrainNoLocal: string,
    TrainName: string,
    StartStation: string,
    EndStation: string,
    Vehicles: string[],
    ServerCode: string,
    TrainData: TrainData,
    id: string,
    Type: "bot" | "user";
}

export type {Train}
