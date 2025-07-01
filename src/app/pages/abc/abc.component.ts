import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-abc',
  imports: [],
  templateUrl: './abc.component.html',
  styleUrl: './abc.component.css'
})
export class AbcComponent {

time = signal('Buenos dias');
aplicacion = signal('Windows,lunix, etc');
alerta =signal('alerta');
normativa =signal('N/A');
fecha =signal('2025-05-20 08:00');
host =signal('N/A');
nombreusr = signal('N/A');
usrej =signal('');
usrafectados =signal('');
accion =signal('');

    timeChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.time.set(newValue);
    };
    aplicacionChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.aplicacion.set(newValue);
    };
    alertaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.alerta.set(newValue);
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
    accionChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.accion.set(newValue);
    };
    hostChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.host.set(newValue);
    };
    normativaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.normativa.set(newValue);
    };
    usrafecChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.usrafectados.set(newValue);
    };


}
