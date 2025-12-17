import { Component, signal  } from '@angular/core';
import {VpnsComponent} from '../vpns/vpns.component'
import { CommonModule } from '@angular/common';
import {AcpsComponent} from '../acps/acps.component'
import { AbcComponent } from "../abc/abc.component";
import { BruteforceComponent } from "../bruteforce/bruteforce.component";
import { InterrumpcionEventosComponent } from "../interrumpcion-eventos/interrumpcion-eventos.component";
import { TableSpaceComponent } from "../table-space/table-space.component";
import { BdMovComponent } from "../bd-mov/bd-mov.component";
import { ApliabcComponent } from '../apliabc/apliabc.component';
import { SoabcComponent } from "../soabc/soabc.component";
import { DbabcComponent } from "../dbabc/dbabc.component";
import { NeabcComponent } from '../neabc/neabc.component';
import { Brute25Component } from "../brute25/brute25.component";
import { DadosComponent } from '../dados/dados.component';

@Component({
  selector: 'app-window',
  imports: [CommonModule, NeabcComponent, DadosComponent, ApliabcComponent, AcpsComponent, VpnsComponent, AbcComponent, BruteforceComponent, InterrumpcionEventosComponent, TableSpaceComponent, BdMovComponent, SoabcComponent, DbabcComponent, Brute25Component],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {

  alerta= signal<string>('Inicio');
  alertas: string[] = ['Inicio','VPN','ACPS','App abc','DB abc','SO abc','NE abc', 'BD Mov Crea Modi Dep' , 'Interrupción de Eventos','Dados de baja','Brute Force .25','Brute Force (.50/.100)', 'Table Space'];


  tiempo = signal<string>('Buenos días');
  tiempos: string[] = ['Buenos días', 'Buenas tardes', 'Buenas noches'];

  atendido_Por = signal<string>('N/A')
  atendidoPorChangeHandler (event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value.trim();
      this.atendido_Por.set(newValue);
    };



}
