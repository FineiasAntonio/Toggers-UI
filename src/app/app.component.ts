import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogonComponent } from './components/logon/logon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Toggers-UI';
}
