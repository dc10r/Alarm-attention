import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {WindowComponent} from '../window/window.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterOutlet, WindowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  title = 'pvn';

}
