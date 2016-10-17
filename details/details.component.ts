import { Component,  OnInit} from "@angular/core";

import {ActivatedRoute} from '@angular/router'
import {DataSourceService} from "../shared/data_source.service";


@Component({
  selector: "app-details",
  templateUrl: "details/details.component.html",
  styleUrls: ["details/details.component.css"],
})

export class DetailsComponent implements OnInit {

  item_id:number;
  country:string;

  constructor(
      private route:ActivatedRoute,
      private data_source:DataSourceService
  ){

  }

  ngOnInit(){

    this.route.params.subscribe(params => {
      this.item_id = params['id'];
      this.country = this.data_source.get_data(this.item_id);
    })

  }
}