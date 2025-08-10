import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  currentDate: Date = new Date();
  isSunday: boolean = false;
  weekDateRange: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isSunday = this.currentDate.getDay() === 0; // 0 = Sunday
    
    if (this.isSunday) {
      this.calculateWeekDateRange();
    }
  }

  private calculateWeekDateRange(): void {
    const sunday = new Date(this.currentDate);
    const friday = new Date(this.currentDate);
    friday.setDate(sunday.getDate() + 5); // Sunday + 5 days = Friday

    const formatOptions: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric' 
    };
    
    const sundayFormatted = sunday.toLocaleDateString('en-US', formatOptions);
    const fridayFormatted = friday.toLocaleDateString('en-US', formatOptions);
    
    this.weekDateRange = `${sundayFormatted} - ${fridayFormatted}`;
  }

  onGetWeeklyRecipe(): void {
    this.router.navigate(['/recipes/loading']);
  }

  onGetRandomRecipe(): void {
    this.router.navigate(['/recipes/loading']);
  }

  get formattedDate(): string {
    return this.currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
