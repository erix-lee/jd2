import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {

 
  rows = [];

  columns = [
    { prop: 'name' },
    { name: 'course' },
    { name: 'score' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/report.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

   
  ngOnInit() {
  }

}
