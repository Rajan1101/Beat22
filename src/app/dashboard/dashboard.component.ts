import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  selectedFilter: string = '';
  isListView: boolean = true;
  beatsData: any[] = [];
  isLoading: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.fetchBeatsData();
  }

  fetchBeatsData(): void {
    this.isLoading = true;
    this.appService.getData().subscribe((response: any) => {
      const beats = response?.playlists[0]?.beats || [];
      this.beatsData = beats.map((beat: any) => ({
        image: beat.cover_picture || 'https://via.placeholder.com/50',
        artist: beat.created_by.handle,
        isVerified: beat.producer?.is_verified || false,
        bpm: beat.tempo,
        key: this.formatKey(beat.key),
        tags: beat.tag || [],
        price: beat.prices?.[0]?.final_price || 0,
        title: beat.title,
        genre: beat.producer.store.general.name,
      }));
      this.isLoading = false;
    },
    (error) => {
      console.error('Error fetching data:', error);
      this.isLoading = false;
    });
  }

  formatKey(key: string): string {
    if (!key) return '';
    return key
      .replace(/_+/g, ' ')
      .replace('sharp', '#')
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/\s#/g, '#');
  }

  filters = [
    { key: 'trending', label: 'Trending Beats', class: 'first-button' },
    { key: 'waveUnder999', label: 'Wave under ₹999', class: 'second-button' },
    {
      key: 'wavePlusSteams',
      label: 'Wave + Steams under ₹1,999',
      class: 'third-button',
    },
    { key: 'exclusive', label: 'Beats with Exclusive', class: 'forth-button' },
  ];

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  onViewChange(isListView: boolean): void {
    this.isListView = isListView;
  }
}
