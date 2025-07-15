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

  
  caso=signal('');
  pais= signal('Brasil');
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

  car = signal<string>('Externo');
  cars: string[] = ['Externo', 'Interno'];

  vac = signal<string>('No');
  vacs: string[] = ['Si', 'No'];

  negocio= signal<string>('Enterprise');
  negocios: string[] = ['Enterpise', 'Mobile'];


  lineaNegocio= signal('');
  tecnologiauser= signal('THE HIVE');
  hostorg= signal('N/A');
  fecha = signal('15/04/2025 21:48');
  notificacionAlerta= signal('15/04/2025 21:48');
  cierreAlerta= signal('15/04/2025 21:48');
  currentuser = signal('David Cruz');
  spk=signal('');
  alertype=signal('');
  categoria=signal('VPN');
  status=signal('CLOSED');
  Clasifiacion=signal('VERDADERO POSITIVO');
  Ingt1=signal('David Cruz');
  Ingt2=signal('Oscar de Los Santos');
  super=signal('Daniel Sanchez');
  turno=signal('NOCTURNO');
  Normativa=signal('NO SOX | NO PCI');
  Criticidad=signal('Alta');
  hostdest=signal('N/A');
  
  alert = {};

  
  estaVacChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.estaVac.set(newValue);
  };

    



  spkChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.spk.set(newValue);
  };

  casoChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.caso.set(newValue);
  };

  alertypeChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.alertype.set(newValue);
  };

  categoriaChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.categoria.set(newValue);
  };

  statusChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.status.set(newValue);
  };

  turnoChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.turno.set(newValue);
  };

  normaChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.Normativa.set(newValue);
  };

  criticidadChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.Criticidad.set(newValue);
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

  hostdestChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    let newValue = input.value;
    newValue = input.value.trim();
    newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
    this.hostdest.set(newValue);
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

  notalertChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.notificacionAlerta.set(newValue);
  };

  cierrealChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.cierreAlerta.set(newValue);
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

  linnegChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.lineaNegocio.set(newValue);
  };

  tecChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.tecnologiauser.set(newValue);
  };
  
  clasifiChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.Clasifiacion.set(newValue);
  };

  vacaionesDocChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.VacacionesDoc.set(newValue);
  };

  ingt1ChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.Ingt1.set(newValue);
  };

  ingt2ChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.Ingt2.set(newValue);
  };

  superChangeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.trim();
    this.super.set(newValue);
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
}

  
  
  
  
  
  
  
  
  
  
  
  
  









  Keydownhandler (event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
  };


}
