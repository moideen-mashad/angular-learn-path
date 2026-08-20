import { Component, signal } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { IntroComponent } from './intro/intro';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, IntroComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
