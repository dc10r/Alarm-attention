import { Component, signal  } from '@angular/core';
import {VpnsComponent} from '../vpns/vpns.component'
import { CommonModule } from '@angular/common';
import {AcpsComponent} from '../acps/acps.component'
import { AbcComponent } from "../abc/abc.component";
import { BruteforceComponent } from "../bruteforce/bruteforce.component";


@Component({
  selector: 'app-window',
  imports: [CommonModule, AcpsComponent, VpnsComponent, AbcComponent, BruteforceComponent],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {

  alerta= signal<string>('Inicio');
  alertas: string[] = ['Inicio','VPN', 'ABC', 'ACPS','Brute Force (.50/.100)'];


  tiempo = signal<string>('Buenos días');
  tiempos: string[] = ['Buenos días', 'Buenas tardes', 'Buenas noches'];

  atendido_Por = signal<string>('N/A')
  atendidoPorChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.atendido_Por.set(newValue);
    };



}
