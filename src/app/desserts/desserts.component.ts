import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {


  src =
  [
     "../../assets/desserts/desserts-simply-900x900-1.jpg",
     "../../assets/desserts/800_vegan-gluten-free-fudge-brownie.jpg",
     "../../assets/desserts/Featured-image-2.png",
     
    
  ];
title =
  [
    "cookies cream",
    "brownie cack",
    "eastern roll",
    
  ]
price =
  [
    "65",
    "80",
    "50",

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
