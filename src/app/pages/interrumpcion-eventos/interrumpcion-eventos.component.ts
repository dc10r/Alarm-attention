import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';

@Component({
  selector: 'app-interrumpcion-eventos',
  imports: [PuntosComponent],
  templateUrl: './interrumpcion-eventos.component.html',
  styleUrl: './interrumpcion-eventos.component.css'
})
export class InterrumpcionEventosComponent {
@Input() tiempo!: String;
@Input() atendido_Por!: String;

alerta =signal('alerta');
host =signal('N/A');

borrado= false
copiado= false


deleteData(){
  this.alerta.set('');
  this.host.set('')
  this.borrado= true;
  setTimeout(() => this.borrado = false, 2000);
}


    alertaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.alerta.set(newValue);
}

     hostChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.host.set(newValue);
    };


copyContent(element: HTMLElement) {
  const text = element.innerText;
  navigator.clipboard.writeText(text).then(() => {
    this.copiado = true;
    setTimeout(() => this.copiado = false, 2000);
  });
}

}
