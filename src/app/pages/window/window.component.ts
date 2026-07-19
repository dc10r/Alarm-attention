import { Component, OnDestroy, OnInit, signal  } from '@angular/core';
import {VpnsComponent} from '../vpns/vpns.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule, NeabcComponent, DadosComponent, ApliabcComponent, AcpsComponent, VpnsComponent, AbcComponent, BruteforceComponent, InterrumpcionEventosComponent, TableSpaceComponent, BdMovComponent, SoabcComponent, DbabcComponent, Brute25Component],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent implements OnInit{

  alerta= signal<string>('Inicio');
  alertas: string[] = ['Inicio','VPN','ACPS','App abc','DB abc','SO abc','NE abc', 'Interrupción de Eventos','Dados de baja','Brute Force .25','Brute Force (.30/.50/.100)', 'Table Space'];


  tiempo = signal<string>('Buenos días');
  tiempos: string[] = ['Buenos días', 'Buenas tardes', 'Buenas noches'];
  private timerId: any; 
  ngOnInit() {
    this.setAutoGreetingBasedOnTime();

  }
 
setAutoGreetingBasedOnTime() {
    const currentHour = new Date().getHours(); // Returns 0 - 23

    let automaticGreeting = 'Buenas noches'; // Default fallback

    if (currentHour >= 6 && currentHour < 12) {
      automaticGreeting = 'Buenos días';
    } else if (currentHour >= 12 && currentHour < 19) {
      automaticGreeting = 'Buenas tardes';
    }

    // 2. Set the signal. Angular & [(ngModel)] handle the dropdown selection automatically!
    this.tiempo.set(automaticGreeting);
  }  



}
