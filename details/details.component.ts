import { Component,  OnInit} from "@angular/core";

import {ActivatedRoute} from '@angular/router'


@Component({
  selector: "app-details",
  templateUrl: "details/details.component.html",
  styleUrls: ["details/details.component.css"],
})

export class DetailsComponent implements OnInit {

  item_id:number;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){

    this.route.params.subscribe(params => {
      this.item_id = params['id'];
    })

  }
}