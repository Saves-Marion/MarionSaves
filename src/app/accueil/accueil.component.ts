import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor() {
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#006d77', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
      slideNavigation:true,
      controlArrows:true,
      navigation:true,

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
   }

  ngOnInit(): void {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}