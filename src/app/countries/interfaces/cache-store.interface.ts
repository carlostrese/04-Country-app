import { Country } from "./country"
import { Region } from "./region.type";

export interface CacheStore{
  byCapical: TemCountires,
  byCountries: TemCountires,
  byRegion:RegionCountires
}

export interface TemCountires{

    term:string,
    countries: Country[];

}

export interface RegionCountires{

  regio: Region,
  countries: Country[];

}
