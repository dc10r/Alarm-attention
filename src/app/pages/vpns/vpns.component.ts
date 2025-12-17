import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-vpns',
  imports: [CommonModule, FormsModule],
  templateUrl: './vpns.component.html',
  styleUrls: ['./vpns.component.css']
})
export class VpnsComponent {
@Input() tiempo!: String;
@Input() atendido_Por!: String;


  pais= signal('México');
  destIP = signal('N/A');
  SrcIp=signal('N/A');
  user=signal('');
  intextuser=signal('N/A');
  name = signal('');
  cargo= signal('');
  jefe = signal('');
  cargojefe = signal('');
  bpjrname = signal('');
  bjrcargo = signal('');
  VacacionesDoc=signal('N/A');
  estaVac = signal('NO');
  hostorg= signal('N/A');
  fecha = signal('15/04/2025 21:48');
  Normativa=signal('N/A');
  alertype=signal('');

  car = signal<string>('Externo');
  cars: string[] = ['Externo', 'Interno'];

  vac = signal<string>('No');
  vacs: string[] = ['Si', 'No'];

  negocio= signal<string>('Enterprise');
  negocios: string[] = ['Enterpise', 'Mobile'];


  borrado= false

deleteData(){
  this.pais.set('México');
  this.destIP.set('');
  this.SrcIp.set('');
  this.user.set('');
  this.name.set('');
  this.cargo.set('');
  this.jefe.set('');
  this.cargojefe.set('');
  this.bpjrname.set('');
  this.bjrcargo.set('');
  this.VacacionesDoc.set('');
  this.hostorg.set('');
  this.fecha.set('');
  this.Normativa.set('');
  this.alertype.set('');
  this.borrado= true;
  setTimeout(() => this.borrado = false, 2000);
}

  alertypeChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    let newValue = input.value;
    newValue = input.value.trim();
    newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
    this.alertype.set(newValue);
    };

  estaVacChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.estaVac.set(newValue);
  };

  normaChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.Normativa.set(newValue);
  };

  hostorgChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    let newValue = input.value;
    newValue = input.value.trim();
    newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
    this.hostorg.set(newValue);
  };

  srcipChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    let newValue = input.value;
    newValue = input.value.trim();
    newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
    this.SrcIp.set(newValue);
  };

  destipChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    let newValue = input.value;
    newValue = input.value.trim();
    newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
    this.destIP.set(newValue);
  };

  fechaChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.fecha.set(newValue);
  };

  userChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.user.set(newValue);
  };

  nameChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.name.set(newValue);
  };

  intextChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.intextuser.set(newValue);
  };

  cargoChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.cargo.set(newValue);
  };

  jefeChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.jefe.set(newValue);
  };

  cargojefeChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.cargojefe.set(newValue);
  };

  bpnameChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.bpjrname.set(newValue);
  };

  bpcargoChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.bjrcargo.set(newValue);
  };

  vacaionesDocChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.VacacionesDoc.set(newValue);
  };

  paisChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.pais.set(newValue);
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
.red{
    color: red;
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

doccopiado = false;

doccopyContent(element: HTMLElement) {
  const text = element.innerText;
  navigator.clipboard.writeText(text).then(() => {
    this.doccopiado = true;
    setTimeout(() => this.doccopiado = false, 2000);
  });
}

Keydownhandler (event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
  };


}
