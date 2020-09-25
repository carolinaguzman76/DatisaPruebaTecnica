export interface SolarFlareModel {

  flrID: string;
  instruments: Array<Instruments>;
  beginTime: string;
  peakTime: string;
  linkedEvents: Array<LinkedEnvents>;

}

export interface Instruments {
  id: number;
  displayName: string;
}

export interface LinkedEnvents {

  activityID: string;
}
