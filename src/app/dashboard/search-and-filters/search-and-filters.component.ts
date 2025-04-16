import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-search-and-filters',
  templateUrl: './search-and-filters.component.html',
  styleUrl: './search-and-filters.component.scss'
})
export class SearchAndFiltersComponent {
  @Output() viewChange = new EventEmitter<boolean>();
  isListView: boolean = true;
  activeDropdown: string | null = null;
  isSortDropdownOpen: boolean = false;
  selectedSortOption: string = 'Latest';
  filterOptions = [
    { name: 'Beat Types', options: ['Beats', 'Beat With Hook', 'Switch Beat'] },
    { name: 'Moods', options: ['Happy', 'Sad', 'Energetic'] },
    { name: 'Tempo', options: ['Slow', 'Medium', 'Fast'] },
    { name: 'Genre', options: ['Pop', 'Rock', 'Hip-Hop'] },
    { name: 'Keys', options: ['C Major', 'D Minor', 'E Major'] },
    { name: 'Instruments', options: ['Guitar', 'Piano', 'Drums'] },
    { name: 'Price', options: ['Free', 'Under ₹999', 'Above ₹999'] }
  ];

  sortOptions = ['For you', 'Latest'];

  toggleView(view: string): void {
    this.isListView = view === 'list';
    this.viewChange.emit(this.isListView);
  }

  toggleDropdown(filterName: string): void {
    this.activeDropdown = this.activeDropdown === filterName ? null : filterName;
  }

  toggleSortDropdown(): void {
    this.isSortDropdownOpen = !this.isSortDropdownOpen;
  }

  selectSortOption(option: string): void {
    this.selectedSortOption = option;
    this.isSortDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.filter-dropdown')) {
      this.activeDropdown = null;
    }

    if (!target.closest('.sort-by')) {
      this.isSortDropdownOpen = false;
    }
  }
}
