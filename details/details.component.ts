import { Component,  OnInit} from "@angular/core";

import {ActivatedRoute} from '@angular/router'
import {DataService} from "../shared/data.service";


@Component({
  selector: "app-details",
  templateUrl: "details/details.component.html",
  styleUrls: ["details/details.component.css"],
})

export class DetailsComponent implements OnInit {

  item_id:number;
  country:any;


  constructor(
      private route:ActivatedRoute,
      private data_service:DataService
  ){

  }

  ngOnInit(){

    this.route.params.subscribe(params => {
      this.item_id = params['id'];
      this.country = this.data_service.get_data()[this.item_id]
    })

  }
}