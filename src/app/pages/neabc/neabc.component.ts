import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';

@Component({
  selector: 'app-neabc',
  imports: [CommonModule, PuntosComponent],
  templateUrl: './neabc.component.html',
  styleUrl: './neabc.component.css'
})
export class NeabcComponent {

@Input() tiempo!: String;
@Input() atendido_Por!: String;

aplicacion = signal('');
alerta = signal(''); 
normativa = signal(''); 
fecha = signal(''); 
userEje = signal(''); 
UserSO = signal(''); 
tipodeObj = signal(''); 
hostnameOrg = signal(''); 
nombreUser = signal(''); 
tipodeMov = signal(''); 
userAfec = signal(''); 
hostnameDest = signal(''); 

car = signal<string>('Externo');
cars: string[] = ['Externo', 'Interno'];
  
cargo= signal('');
jefe = signal('');
empresa=signal('N/A');  

borrado= false

deleteData(){
 this.alerta.set(''); 
  this.normativa.set(''); 
  this.fecha.set(''); 
  this.userEje.set(''); 
  this.UserSO.set(''); 
  this.tipodeObj.set(''); 
  this.hostnameOrg.set(''); 
  this.nombreUser.set(''); 
  this.tipodeMov.set(''); 
  this.userAfec.set(''); 
  this.hostnameDest.set('');
  this.jefe.set(''); 
  this.cargo.set(''); 
  this.empresa.set('');  
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

UserSOChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.UserSO.set(newValue);
};

tipodeObjChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.tipodeObj.set(newValue);
};

hostnameOrgChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.hostnameOrg.set(newValue);
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

userAfecChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.userAfec.set(newValue);
};

hostnameDestChangeHandler (event: Event) {
  const input = event.target as HTMLInputElement;
  let newValue = input.value;
  newValue = input.value.trim();
  newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
  this.hostnameDest.set(newValue);
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

    empresaChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.empresa.set(newValue);
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
