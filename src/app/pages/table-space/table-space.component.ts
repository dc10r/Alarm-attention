import { Component } from '@angular/core';
import { signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table-space',
  imports: [CommonModule],
  templateUrl: './table-space.component.html',
  styleUrl: './table-space.component.css'
})
export class TableSpaceComponent {
@Input() tiempo!: String;
@Input() atendido_Por!: String;


 bases= signal<string>('Base');
 fecha= signal<string>('2025-04-03 10:30:14');
 warning= signal<string>('85%');
 error= signal<string>('90%');
 valor= signal<string>('85%');
 alerta= signal<string>('Base');


borrado= false

deleteData(){
  this.bases.set('');
  this.fecha.set('');
  this.warning.set('85%');
  this.error.set('90%');
  this.valor.set('85%')
  this.borrado= true;
  setTimeout(() => this.borrado = false, 2000);
}


    alertaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.alerta.set(newValue);
}

    fechaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.fecha.set(newValue);
}

    basesChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.bases.set(newValue);
}

    warningChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.warning.set(newValue);
}

    errorChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.error.set(newValue);
}

    valorChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.valor.set(newValue);
}

copiado= false

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

.valor{
    color: red;
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
copiadodots = false;


copydotsContent(element: HTMLElement) {
  const text = element.innerText;
  navigator.clipboard.writeText(text).then(() => {
    this.copiadodots = true;
    setTimeout(() => this.copiadodots = false, 2000);
  });
}

}
