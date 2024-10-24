import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  activeMenu: string | null = null;

  constructor(private router: Router) {
    this.setInitialActiveMenu();
  }
  // Function to set the active menu
  setActiveMenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
  setInitialActiveMenu(): void {
    const currentUrl = this.router.url;
    if (currentUrl.includes('reportA') || currentUrl.includes('reportB')) {
      this.activeMenu = 'reports';
    } else if (currentUrl.includes('settings')) {
      this.activeMenu = 'settings';
    } else {
      this.activeMenu = 'dashboard';
    }
  }
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
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
