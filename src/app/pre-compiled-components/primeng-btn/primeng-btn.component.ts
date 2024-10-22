import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-primeng-btn',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './primeng-btn.component.html',
  styleUrl: './primeng-btn.component.scss',
})
export class PrimengBtnComponent {
  @Input() label = '';
}
