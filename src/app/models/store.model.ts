export interface StoreModel {
  readonly id       : number;
  readonly name     : string;
  readonly logoUrl  : string;
  readonly distanceInMeters : number;
  readonly tagIds   : string[];   // Not used in this task :) I'll not get into details
}