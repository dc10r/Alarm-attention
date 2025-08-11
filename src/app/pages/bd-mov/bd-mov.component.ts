import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';


@Component({
  selector: 'app-bd-mov',
  imports: [PuntosComponent, CommonModule],
  templateUrl: './bd-mov.component.html',
  styleUrl: './bd-mov.component.css'
})
export class BdMovComponent {
@Input() tiempo!: String;
@Input() atendido_Por!: String;


aplicacion = signal('Windows,lunix, etc');
alerta =signal('alerta');
normativa =signal('N/A');
fecha =signal('2025-05-20 08:00');
host =signal('N/A');
nombreusr = signal('N/A');
usrej =signal('');
usrafectados =signal('');
accion =signal('');
userSO = signal('');
tipoObj = signal(''); 


borrado= false

deleteData(){
  this.aplicacion.set('');
  this.alerta.set('');
  this.fecha.set('');
  this.host.set('');
  this.nombreusr.set('');
  this.usrej.set('');
  this.normativa.set('');
  this.accion.set('');
  this.usrafectados.set('');
  this.tipoObj.set('')
  this.userSO.set('')
  this.borrado= true;
  setTimeout(() => this.borrado = false, 2000);
}

    userSOChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.userSO.set(newValue);
    };
    tipoObjChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.tipoObj.set(newValue);
    };
    alertaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.alerta.set(newValue);

      const appName = newValue.split(': ')[0];
      this.aplicacion.set(appName);
    };
    fechaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.fecha.set(newValue);
    };
    nombreusrChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.nombreusr.set(newValue);
    };
    usrejChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.usrej.set(newValue);
    };
    accionChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.accion.set(newValue);
    };
    hostChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.host.set(newValue);
    };
    normativaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.normativa.set(newValue);
    };
    usrafecChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.usrafectados.set(newValue);
    };

  copiado = false;

copyContent(element: HTMLElement) {
  const text =
  `
<style>
table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 2px solid rgb(0, 0, 0);
    text-align: center;
}
th{
    background-color: rgb(0, 168, 224);
    color: white;
    border: 2px solid rgb(0, 0, 0);

}
td {
    border: 2px solid rgb(0, 0, 0);
}
.mailtable{
    height: 350px;
}
  </style>
    ${element.outerHTML}
  `;
const blob = new Blob([text], { type: 'text/html' });
  const data = [new ClipboardItem({ 'text/html': blob })];

  navigator.clipboard.write(data)
    .then(() => console.log('Contenido copiado con éxito'))
    .catch(err => console.error('Error al copiar:', err));
    this.copiado= true;
    setTimeout(() => this.copiado = false, 2000);
}


}
