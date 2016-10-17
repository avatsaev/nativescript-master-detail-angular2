import { Injectable } from "@angular/core";



@Injectable()
export class DataService {

  constructor(){}

  get_data(){

    return [
      "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
      "Denmark", "Estonia", "Finland", "France","Germany", "Greece", "Hungary", "Ireland", "Italy",
      "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands","Poland", "Portugal", "Romania", "Slovakia",
      "Slovenia","Spain", "Sweden", "United Kingdom"
    ];
    
  }

}