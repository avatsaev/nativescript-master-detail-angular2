import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../shared/data.service";


@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {

  countries:Array<string>;

  constructor(
      private router: Router,
      private data_service: DataService
  ){
    this.router = router;

  }

  showDetails(e){
    this.router.navigate(["details", e.index])
  }

  ngOnInit(){
    this.countries = this.data_service.get_data()
  }
}