import { CommonModule } from '@angular/common';
import { Component, signal, Input } from '@angular/core';
import {PuntosComponent} from '../puntos/puntos.component';

@Component({
  selector: 'app-apliabc',
  imports: [CommonModule, PuntosComponent],
  templateUrl: './apliabc.component.html',
  styleUrl: './apliabc.component.css'
})
export class ApliabcComponent {
@Input() tiempo!: String;
@Input() atendido_Por!: String;


aplicacion = signal('Windows,lunix, etc');

alerta = signal(''); 
normativa = signal(''); 
fecha = signal(''); 
userEje = signal(''); 
userso = signal(''); 
tipodeobj = signal(''); 
hostorg = signal(''); 
nombreUser = signal(''); 
tipodemov = signal(''); 
userAfectados = signal(''); 
hostdest = signal(''); 

tecnologia = signal('')
cargo= signal('');
jefe = signal('');
empresa=signal('N/A');

car = signal<string>('Externo');
cars: string[] = ['Externo', 'Interno'];
  

borrado= false

deleteData(){
  this.alerta.set(''); 
  this.normativa.set(''); 
  this.fecha.set(''); 
  this.userEje.set(''); 
  this.userso.set(''); 
  this.tipodeobj.set(''); 
  this.hostorg.set(''); 
  this.nombreUser.set(''); 
  this.tipodemov.set(''); 
  this.userAfectados.set(''); 
  this.hostdest.set('');
  this.cargo.set('');
  this.empresa.set('');
  this.jefe.set(''); 
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

    usersoChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.userso.set(newValue);
    };

    tipodeobjChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.tipodeobj.set(newValue);
    };

    hostorgChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.hostorg.set(newValue);
    };

    nombreUserChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.nombreUser.set(newValue);
    };

    tipodemovChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.tipodemov.set(newValue);
    };

    userAfectadosChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.userAfectados.set(newValue);
    };

    hostdestChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.hostdest.set(newValue);
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
