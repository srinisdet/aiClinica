import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validUsername = 'admin';
  private validPassword = 'password';

  constructor(private router: Router) {}

  // Mock login function
  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.router.navigate(['/dashboard']); // Navigate to the dashboard on successful login
      return true;
    } else {
      return false; // Invalid credentials
    }
  }
}
