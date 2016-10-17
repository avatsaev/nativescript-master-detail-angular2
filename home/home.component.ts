import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataSourceService } from "../shared/data_source.service";


@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {

  countries:Array<string>;

  constructor(
      private router: Router,
      private data_source:DataSourceService
  ){

  }

  showDetails(e){
    this.router.navigate(["details", e.index])
  }

  ngOnInit(){
    this.countries = this.data_source.get_all_data();
  }
}