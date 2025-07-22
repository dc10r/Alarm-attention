import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-puntos',
  imports: [CommonModule],
  templateUrl: './puntos.component.html',
  styleUrl: './puntos.component.css'
})
export class PuntosComponent {
@Input() atendido_Por!: String;
@Input() nombreusr!: String;
@Input() alerta!: String;
@Input() accion!: String;

copiado = false;


copyContent(element: HTMLElement) {
  const text = element.innerText;
  navigator.clipboard.writeText(text).then(() => {
    this.copiado = true;
    setTimeout(() => this.copiado = false, 2000);
  });
}



}
