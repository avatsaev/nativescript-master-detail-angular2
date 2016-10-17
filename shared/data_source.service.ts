import { Injectable } from "@angular/core";



@Injectable()
export class DataSourceService {
  private data:Array<string>;

  constructor(){
    this.data = ["Austria",
      "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
      "Denmark", "Estonia", "Finland", "France","Germany", "Greece", "Hungary", "Ireland", "Italy",
      "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands","Poland", "Portugal", "Romania", "Slovakia",
      "Slovenia","Spain", "Sweden", "United Kingdom"];
  }


  get_all_data():Array<string>{
    return this.data;
  }

  get_data(index:number):string{
    return this.data[index];
  }




}