import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
alerta = signal('N/A');
user =signal('N/A');
ip =signal('N/A');

 borrado= false

deleteData(){
  this.alerta.set('');
  this.user.set('');
  this.ip.set('');
  this.borrado= true;
  setTimeout(() => this.borrado = false, 2000);
}

alertaChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.alerta.set(newValue);
    };

userChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.user.set(newValue);
    };

ipChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      let newValue = input.value;
      newValue = input.value.trim();
      newValue = newValue.replace(/[\[\]\(\)\{\}]/g, '');
      this.ip.set(newValue);
    };

}
