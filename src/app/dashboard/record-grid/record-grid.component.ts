import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-record-grid',
  templateUrl: './record-grid.component.html',
  styleUrl: './record-grid.component.scss',
})
export class RecordGridComponent {
  @Input() data: any[] = [];

  toggleOptions(record: any): void {
    record.showOptions = !record.showOptions;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    this.data.forEach((record) => {
      if (!target.closest('.more-options-container')) {
        record.showOptions = false;
      }
    });
  }
}
