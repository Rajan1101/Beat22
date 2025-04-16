import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.scss',
})
export class RecordListComponent {
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
