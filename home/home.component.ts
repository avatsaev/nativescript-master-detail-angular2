import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {

  @ViewChild("initialContainer") initialContainer: ElementRef;
  @ViewChild("mainContainer") mainContainer: ElementRef;


  countries:Array<string>;

  private router:Router;

  constructor(router: Router){
    this.router = router;
  }


  showDetails(e){
    this.router.navigate(["details", e.index])
  }

  ngOnInit(){

    this.countries = ["Austria",
      "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
      "Denmark", "Estonia", "Finland", "France","Germany", "Greece", "Hungary", "Ireland", "Italy",
      "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands","Poland", "Portugal", "Romania", "Slovakia",
      "Slovenia","Spain", "Sweden", "United Kingdom"];

  }
}