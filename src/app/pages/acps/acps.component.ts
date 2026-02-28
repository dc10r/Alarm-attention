import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import{PuntosComponent} from '../puntos/puntos.component'
@Component({
  selector: 'app-acps',
  imports: [CommonModule, PuntosComponent],
  templateUrl: './acps.component.html',
  styleUrl: './acps.component.css'
})
export class AcpsComponent {
@Input() tiempo!: String;
@Input() atendido_Por!: String;


aplicacion = signal('Windows,lunix, etc');
alerta =signal('alerta');
fecha =signal('2025-05-20 08:00');
host =signal('N/A');
nombreusr = signal('N/A');
usrej =signal('');
ipdest =signal('');
iporg =signal('');
normativa =signal('');
privilegedUser =signal('');

  car = signal<string>('Externo');
  cars: string[] = ['Externo', 'Interno'];
  
  cargo= signal('');
  jefe = signal('');
  empresa=signal('N/A');


borrado= false

deleteData(){
  this.alerta.set('');
  this.fecha.set('');
  this.host.set('');
  this.nombreusr.set('');
  this.usrej.set('');
  this.ipdest.set('');
  this.iporg.set('');
  this.normativa.set('');
  this.privilegedUser.set('');
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
    normativaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.normativa.set(newValue);
    };
    privilegedUserChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.privilegedUser.set(newValue);
    };

    iporgChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.iporg.set(newValue);
    };
    ipdestChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.ipdest.set(newValue);
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
