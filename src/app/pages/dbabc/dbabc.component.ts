import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';

@Component({
  selector: 'app-dbabc',
  imports: [CommonModule, PuntosComponent],
  templateUrl: './dbabc.component.html',
  styleUrl: './dbabc.component.css'
})
export class DbabcComponent {

@Input() tiempo!: String;
@Input() atendido_Por!: String;

alerta = signal(''); 
normativa = signal(''); 
fecha = signal(''); 
host = signal(''); 
userEje = signal(''); 
userSo = signal(''); 
tipodeObj = signal(''); 
nombreUser = signal(''); 
tipodeMov = signal(''); 
Userafec = signal('');
aplicacion = signal('');
borrado= false


deleteData(){
  this.alerta.set(''); 
  this.normativa.set(''); 
  this.fecha.set(''); 
  this.host.set(''); 
  this.userEje.set(''); 
  this.userSo.set(''); 
  this.tipodeObj.set(''); 
  this.nombreUser.set(''); 
  this.tipodeMov.set(''); 
  this.Userafec.set(''); 
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

hostChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.host.set(newValue);
};

userEjeChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.userEje.set(newValue);
};

userSoChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.userSo.set(newValue);
};

tipodeObjChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.tipodeObj.set(newValue);
};

nombreUserChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.nombreUser.set(newValue);
};

tipodeMovChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.tipodeMov.set(newValue);
};

UserafecChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.Userafec.set(newValue);
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
