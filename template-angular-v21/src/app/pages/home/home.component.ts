import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false,
})
export class HomeComponent {
  protected readonly title = signal('Angular v21');
}
