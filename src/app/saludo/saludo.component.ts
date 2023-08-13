import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  /* template: `<h1>Componente Saludo</h1>
  <h2>Subtítulo</h2>`, */
  templateUrl: './saludo.component.html',
  /* styles: [
    `h1 {
      background-color: green;
    }
    h2{
      color: tomato;
    }`
  ], */
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identifParrafo: string;
  identifTypeInput: string;

  constructor() {
    this.mensaje = 'Un saludo a todos';
    this.identifParrafo = 'parrafoPrincipal';
    this.identifTypeInput = 'text';

    setTimeout(() => {
      this.mensaje = 'Otro mensaje diferente';
      this.identifParrafo = 'main';
      this.identifTypeInput = 'password';
    }, 3000);
  }

  ngOnInit(): void {
  }

  mostrarSaludo(): string {
    return 'Saludo desde el método';
  }

}
