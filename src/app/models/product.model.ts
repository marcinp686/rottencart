export interface ProductModel {
  readonly id           : string;
  readonly name         : string;
  readonly price        : number;
  readonly categoryId   : number;
  readonly ratingValue  : number;
  readonly ratingCount  : number;
  readonly imageUrl     : number;
  readonly featureValue : number;
  readonly storeIds     : string[]
}