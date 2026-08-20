import { Component, signal } from '@angular/core';
import { Test } from './test/test';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Test],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
