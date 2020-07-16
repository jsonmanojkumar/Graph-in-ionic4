import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showChart();
    this.showChart2() ;
 
  }



  
  showChart() {
    var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["Correct", "Wrong", "Skipped" ],
        datasets: [{
              label: "This is chart",
              backgroundColor: [
                'green',
            '#a80000',
            '#d0d000',
              ],
              borderColor: [
                'green',
                '#a80000',
                '#d0d000',
              ],
              data: [20, 5, 10 ],
              borderWidth: 1
        }]
       }
    });
  }
  
  showChart2() {
    var ctx2 = (<any>document.getElementById('chart2')).getContext('2d');
    var chart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Correct', 'Wrong', 'Skipped'],
        datasets: [{
          label: 'Result', 
          data: [200, 50, 30],
          backgroundColor: [
            'green',
            '#a80000',
            '#d0d000',
          ],
          borderColor: [
            'green',
            '#a80000',
            '#d0d000',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  
  
}
