import { Component, signal  } from '@angular/core';
import {VpnsComponent} from '../vpns/vpns.component'
import { CommonModule } from '@angular/common';
import {AcpsComponent} from '../acps/acps.component'
import { AbcComponent } from "../abc/abc.component";


@Component({
  selector: 'app-window',
  imports: [CommonModule, AcpsComponent, VpnsComponent, AbcComponent],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {

  alerta= signal<string>('Inicio');
  alertas: string[] = ['Inicio','VPN', 'ABC', 'ACPS'];


}
