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
tecnologia = signal('')

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

      const appName = newValue.split(':')[0];
      this.tecnologia.set(appName);
 
    }

     hostChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.host.set(newValue);
    };

 
    

copyContent(element: HTMLElement) {
  const text =
  `
<style>
table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 2px solid rgb(0, 0, 0);
    text-align: center;
    height: 100px;
}
th{
    background-color: rgb(0, 168, 224);
    color: white;
    border: 2px solid rgb(0, 0, 0);

}
td {
    border: 2px solid rgb(0, 0, 0);
}
p{
font-family: Arial, Helvetica, sans-serif;
}
.mailtable {
    height: 350px;
}

.datos{
    padding: 3px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.datosTable{
    padding: 3px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
