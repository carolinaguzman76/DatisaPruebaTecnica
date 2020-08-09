export interface AsteroidsNeowsModel {

  links: Links;
  element_count: number;
  near_earth_objects: any;


}

interface Links {

  next: string;
  prev: string;
  self: string;

}

export interface NearObject {

  name: string;
  nasa_jpl_url: string;
}




