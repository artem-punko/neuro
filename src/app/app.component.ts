import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeuroService } from './services/neuro.service';
import { Spinkit } from 'ng-http-loader/spinkits';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  firstParameter = 0;
  secondParameter = 0;
  thirdParameter = 0;
  public spinkit = Spinkit;
  trainBrain;
  trainMl;
  trainNeataptic;
  runBrain;
  runMl;
  runNeataptic;
  middleRunBrain;
  middleRunMl;
  middleRunNeataptic;
  runBrain1;
  runMl1;
  runNeataptic1;
  data;
  datas;
  msgs: any;

  constructor(
    private neuroService: NeuroService
  ) { }

  ngOnInit() {
    this.initGraph();
    this.normalization();
  }

  selectData(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info',
    summary: 'Data Selected',
    'detail': this.datas.datasets[event.element._datasetIndex].data[event.element._index] });
}

  neuro(type) {
    this.neuroService.neuro(type, this.firstParameter, this.secondParameter, this.thirdParameter).subscribe(success => {
      if (type === 0) {
        this.data = success;
      } else if (type === 1) {
        this.trainBrain = success;
      } else if (type === 2) {
        this.runBrain = success;
        let middle = 0;
        for (let i = 0; i < this.runBrain.deviation.length; i++) {
          middle += +this.runBrain.deviation[i];
        }
        this.middleRunBrain = middle / this.runBrain.deviation.length;
        this.datas.datasets.push(
          {
            label: 'Brain',
            data: this.runBrain.output,
            fill: false,
            borderColor: 'red'
          }
        );
      } else if (type === 3) {
        this.trainMl = success;
      } else if (type === 4) {
        const k = [];
        this.runMl = success;
        let middle = 0;
        for (let j = 0; j < this.runMl.output.length; j++) {
          k.push(this.runMl.output[j][0]);
          middle += +this.runMl.deviation[j];
        }
        this.middleRunMl = middle / this.runMl.deviation.length;
        this.datas.datasets.push(
          {
            label: 'Ml',
            data: k,
            fill: false,
            borderColor: 'black'
          }
        );
      } else if (type === 5) {
        this.trainNeataptic = success;
      } else if (type === 6) {
        this.runNeataptic = success;
        let middle = 0;
        for (let i = 0; i < this.runNeataptic.deviation.length; i++) {
          middle += +this.runNeataptic.deviation[i];
        }
        this.middleRunNeataptic = middle / this.runNeataptic.deviation.length;
        this.datas.datasets.push(
          {
            label: 'Neataptic',
            data: this.runNeataptic.output,
            fill: false,
            borderColor: 'green'
          }
        );
      } else if (type === 7) {
        this.runBrain1 = success;
      } else if (type === 8) {
        this.runMl1 = success;
      } else if (type === 9) {
        this.runNeataptic1 = success;
      }
    },
      error => {
      });
  }

  normalization() {
    this.neuro(0);
  }

  trainBrainNeuro() {
    this.neuro(1);
  }

  runBrainNeuro() {
    this.neuro(2);
  }

  myselfRunBrainNeuro() {
    this.neuro(7);
  }

  trainMlNeuro() {
    this.neuro(3);
  }

  runMlNeuro() {
    this.neuro(4);
  }

  myselfRunMlNeuro() {
    this.neuro(8);
  }

  trainNeatapticNeuro() {
    this.neuro(5);
  }

  runNeatapticNeuro() {
    this.neuro(6);
  }

  myselfRunNeatapticNeuro() {
    this.neuro(9);

  }

  initGraph() {
    this.datas = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
      datasets: [
        {
          label: 'Нужный результат',
          data: [
            0,
            0,
            0,
            0,
            0.047,
            0.031,
            0.022,
            0,
            0.14,
            0.184,
            0.208,
            0.138,
            0.124,
            0,
            0.268,
            0.172,
            0.145,
            0,
            0,
            0,
            0,
            0,
            0.05,
            0.041,
            0.025,
            0,
            0.102,
            0.124,
            0.145,
            0.101,
            0.059,
            0,
            0.182,
            0.12,
            0.077,
            0,
            0,
            0,
            0,
            0,
            0.048,
            0.031,
            0.025,
            0,
            0.099,
            0.114,
            0.131,
            0.098,
            0.057,
            0,
            0.167,
            0.114,
            0.077,
            0,
            0,
            0.159],
          fill: false,
          borderColor: '#4bc0c0'
        },
        // {
        //   label: 'Результат расчёта №1 (Своя нейронная сеть)',
        //   data: [
        //     '0.0181778390', '0.0148178143', '0.0107268076', '0.0012144264', '0.0294571016',
        //     '0.0237340014', '0.0168899093', '0.0017792471', '0.1438535005', '0.1813332140',
        //     '0.2018982768', '0.1567617506', '0.1040902361', '0.0071541513', '0.2553935647',
        //     '0.1968443543', '0.1275759935', '0.0067931004', '0.0185482129', '0.0145732015', '0.0098699545',
        //     '0.0006637911', '0.0279275365', '0.0217093248', '0.0144734401', '0.0009109940',
        //     '0.1051070988', '0.1283166856', '0.1419995725', '0.1057597026', '0.0653675869', '0.0026922738',
        //     '0.1806832552', '0.1324598640', '0.0788524821', '0.0024436372', '0.0183447972',
        //     '0.0142645594', '0.0094782468', '0.0005553657', '0.0271510240', '0.0208927654',
        //     '0.0136702815', '0.0007508200', '0.0962952673', '0.1166607291', '0.1288629323',
        //     '0.0948788226', '0.0574642047', '0.0020724263', '0.1639824957', '0.1185716465',
        //     '0.0689237788', '0.0018642403', '0.0181670655', '0.1543832719'],
        //   fill: false,
        //   borderColor: '#f9a203'
        // }
      ]
    }
  }
}
