import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  datasource = {
    'name': 'Lao Lao',
      'title': 'general manager',
      'children': [
        { 'name': 'Bo Miao', 'title': 'department manager', 'collapsed': true,
          'children': [
            { 'name': 'Li Jing', 'title': 'senior engineer', 'className': 'slide-up' },
            { 'name': 'Li Xin', 'title': 'senior engineer', 'collapsed': true, 'className': 'slide-up',
              'children': [
                { 'name': 'To To', 'title': 'engineer', 'className': 'slide-up' },
                { 'name': 'Fei Fei', 'title': 'engineer', 'className': 'slide-up' },
                { 'name': 'Xuan Xuan', 'title': 'engineer', 'className': 'slide-up' }
              ]
            }
          ]
        },
        { 'name': 'Su Miao', 'title': 'department manager',
          'children': [
            { 'name': 'Pang Pang', 'title': 'senior engineer' },
            { 'name': 'Hei Hei', 'title': 'senior engineer', 'collapsed': true,
              'children': [
                { 'name': 'Xiang Xiang', 'title': 'UE engineer', 'className': 'slide-up' },
                { 'name': 'Dan Dan', 'title': 'engineer', 'className': 'slide-up' },
                { 'name': 'Zai Zai', 'title': 'engineer', 'className': 'slide-up' }
              ]
            }
          ]
        }
      ]
  };

  constructor() { }

  ngOnInit(): void {
    $('#chart-container').orgchart({
      'data' : this.datasource,
      'nodeContent': 'title'
    });
  }

}
