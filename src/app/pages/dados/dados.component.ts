import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';


@Component({
  selector: 'app-dados',
  imports: [CommonModule, PuntosComponent],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {

@Input() tiempo!: String;
@Input() atendido_Por!: String;

alerta = signal(''); 
normativa = signal(''); 
fecha = signal(''); 
fechaBaja = signal(''); 
attuid = signal(''); 
iporg = signal(''); 
nombre = signal(''); 
accion = signal('LOGIN');
borrado= false

deleteData(){
  this.alerta.set(''); 
  this.normativa.set(''); 
  this.fecha.set(''); 
  this.fechaBaja.set(''); 
  this.attuid.set(''); 
  this.iporg.set(''); 
  this.nombre.set(''); 
  this.accion.set('LOGIN'); 
  this.borrado= true;
  setTimeout(() => this.borrado = false, 2000);
}

alertaChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.alerta.set(newValue);
};

normativaChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.normativa.set(newValue);
};

fechaChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.fecha.set(newValue);
};

fechaBajaChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.fechaBaja.set(newValue);
};

attuidChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.attuid.set(newValue);
};

iporgChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.iporg.set(newValue);
};

nombreChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.nombre.set(newValue);
};

accionChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.accion.set(newValue);
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

copiadodots = false;

copydotsContent(element: HTMLElement) {
  const text = element.innerText;
  navigator.clipboard.writeText(text).then(() => {
    this.copiadodots = true;
    setTimeout(() => this.copiadodots = false, 2000);
  });
}

}
