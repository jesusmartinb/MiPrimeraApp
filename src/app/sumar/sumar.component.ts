import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  sumando1: number;
  sumando2: number;

  resultado: number;

  constructor() {
    this.sumando1 = 79;
    this.sumando2 = 217;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  sumar() {
    this.resultado = this.sumando1 + this.sumando2;
  }

}
