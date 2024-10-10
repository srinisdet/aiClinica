import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEvents(): Observable<any[]> {
    // Simulate API call
    const events = [
      {
        name: 'Meeting with CEO',
        date: new Date(2024, 9, 10),
        time: '10:00 AM',
      },
      {
        name: 'Team Lunch with Shire',
        date: new Date(2024, 9, 10),
        time: '1:00 PM',
      },
      {
        name: 'Project Deadline',
        date: new Date(2024, 9, 11),
        time: '5:00 PM',
      },
      {
        name: 'Client Presentation',
        date: new Date(2024, 9, 12),
        time: '9:00 AM',
      },
      {
        name: 'Knowledge Tranfer',
        date: new Date(2024, 9, 13),
        time: '9:00 AM',
      },
      {
        name: 'New trainee onboarding',
        date: new Date(2024, 9, 13),
        time: '11:00 AM',
      },
      {
        name: 'Client Presentation',
        date: new Date(2024, 9, 14),
        time: '9:00 AM',
      },
    ];
    return of(events);
  }
}
