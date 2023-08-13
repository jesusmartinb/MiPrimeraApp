import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  tiempo: number;

  constructor() {
    this.tiempo = 10;
  }

  ngOnInit(): void {
  }

  cuentAtras() {
    let interval = setInterval(() => {
      this.tiempo -= 1;
      if (this.tiempo < 1) {
        clearInterval(interval);
      }
    }, 1000);

  }

}
