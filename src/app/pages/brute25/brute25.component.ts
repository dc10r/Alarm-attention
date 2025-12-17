import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';


@Component({
  selector: 'app-brute25',
  imports: [CommonModule, PuntosComponent],
  templateUrl: './brute25.component.html',
  styleUrl: './brute25.component.css'
})
export class Brute25Component {

@Input() tiempo!: String;

@Input() atendido_Por!: String;

aplicacion = signal('');
alerta = signal(''); 
fecha = signal(''); 
serviciosIden = signal(''); 
ipOrg = signal(''); 
ipDest = signal(''); 
cantInt = signal(''); 

borrado= false

deleteData(){
  this.aplicacion.set('');
  this.alerta.set('');
  this.fecha.set('');
  this.serviciosIden.set(''); 
  this.ipOrg.set(''); 
  this.ipDest.set(''); 
  this.cantInt.set(''); 

  this.borrado= true;
  setTimeout(() => this.borrado = false, 2000);
}



    alertaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.alerta.set(newValue);

      const appName = newValue.split(': ')[0];
      this.aplicacion.set(appName);
    };

fechaChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.fecha.set(newValue);
};

serviciosIdenChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.serviciosIden.set(newValue);
};

ipOrgChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.ipOrg.set(newValue);
};

ipDestChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.ipDest.set(newValue);
};

cantIntChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.cantInt.set(newValue);
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
