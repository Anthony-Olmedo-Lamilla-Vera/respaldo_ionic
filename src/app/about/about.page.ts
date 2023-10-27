import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }
  list= [{
    id:1,
    descripcion : "sueño"
  },
  {
    id:2,
    descripcion : "sueño2"
  },
  {
    id:3,
    descripcion : "sueño3"
  }



  ]
  ngOnInit() {
  }

}
