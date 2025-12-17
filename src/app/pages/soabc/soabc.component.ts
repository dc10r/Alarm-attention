import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';

@Component({
  selector: 'app-soabc',
  imports: [CommonModule, PuntosComponent],
  templateUrl: './soabc.component.html',
  styleUrl: './soabc.component.css'
})
export class SoabcComponent {
@Input() tiempo!: String;
@Input() atendido_Por!: String;

alerta = signal(''); 
normativa = signal(''); 
fecha = signal(''); 
userEje = signal(''); 
Userafec = signal(''); 
hostname = signal(''); 
nombreUser = signal(''); 
tipodeMov = signal('');
aplicacion = signal('');

borrado= false

deleteData(){
  this.alerta.set(''); 
  this.normativa.set(''); 
  this.fecha.set(''); 
  this.userEje.set(''); 
  this.Userafec.set(''); 
  this.hostname.set(''); 
  this.nombreUser.set(''); 
  this.tipodeMov.set(''); 
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

userEjeChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.userEje.set(newValue);
};

UserafecChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.Userafec.set(newValue);
};

hostnameChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.hostname.set(newValue);
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
