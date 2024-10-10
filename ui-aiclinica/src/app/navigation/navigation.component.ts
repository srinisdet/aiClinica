import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isSearchExpanded: boolean = false; // Control search box expansion
  searchQuery: string = ''; // Bind this to the search input

  toggleSearch() {
    this.isSearchExpanded = !this.isSearchExpanded;
    // Focus the input field if search is expanded
    if (this.isSearchExpanded) {
      setTimeout(() => {
        const inputField = document.querySelector(
          '.search-input'
        ) as HTMLInputElement;
        if (inputField) {
          inputField.focus();
        }
      }, 100);
    }
  }

  onSettings() {
    console.log('Settings clicked');
    // Add routing or additional functionality for Settings
  }

  onLogout() {
    console.log('Logout clicked');
    // Add routing or additional functionality for Logout
  }
}
