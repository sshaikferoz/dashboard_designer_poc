import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-primeng-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './primeng-table.component.html',
  styleUrl: './primeng-table.component.scss',
})
export class PrimengTableComponent {
  @Input() tableData: any[] = [];
}
