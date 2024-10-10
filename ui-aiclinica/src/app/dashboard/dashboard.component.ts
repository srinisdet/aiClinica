import { Component, inject, ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { EventService } from '../event.service';

export interface ReportData {
  submittedBy: string;
  date: string;
  reportName: string;
  actions: string;
  status: string;
}

const REPORT_DATA: ReportData[] = [
  {
    submittedBy: 'Nick Fury',
    date: '2024-10-11',
    reportName: 'Molecules Report',
    status: 'Submitted',
    actions: 'View',
  },
  {
    submittedBy: 'Nick Fury',
    date: '2024-10-02',
    reportName: 'Rx Research Report',
    actions: 'View',
    status: 'Pending',
  },
  {
    submittedBy: 'Nick Fury',
    date: '2024-09-30',
    reportName: 'Molecule Study Report',
    actions: 'View',
    status: 'Pending',
  },
  {
    submittedBy: 'Nick Fury',
    date: '2024-09-22',
    reportName: 'Rx Research Report',
    actions: 'View',
    status: 'Overdue',
  },
  {
    submittedBy: 'Nick Fury',
    date: '2024-09-18',
    reportName: 'Molecule Study Report',
    actions: 'View',
    status: 'Submitted',
  },
  {
    submittedBy: 'Nick Fury',
    date: '2024-09-01',
    reportName: 'Molecule Study Report',
    actions: 'View',
    status: 'Pending',
  },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  // ngx -charts vertical bar
  title = 'barchartApp';
  dataset = [
    { name: 'X', value: 1 },
    { name: 'Y', value: 2 },
  ];

  reportData: ReportData[] = REPORT_DATA;
  paginatedReportData!: ReportData[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  filteredEvents: { name: string; date: Date; time: string }[] | undefined;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.paginatedReportData = this.reportData.slice(0, 5); // Default pagination slice
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  // Handles click event on the entire row
  onRowClick(report: ReportData) {
    console.log('Report clicked: ', report);
    // Load corresponding graph or data based on clicked report
  }

  // Handles click event on a specific action button
  onActionClick(event: Event, report: ReportData) {
    event.stopPropagation(); // Prevent row click event when button is clicked
    console.log('Action clicked for: ', report);
  }

  // Paginate the data
  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedReportData = this.reportData.slice(startIndex, endIndex);
  }

  getIcon(icon: string) {
    if (icon == 'Submitted') return 'check_circle';
    else if (icon == 'Pending') return 'pending';
    else return 'error';
  }

  selectedDate: Date | null = null;

  // Example event list (normally this might come from a service)
  events = [
    { name: 'Meeting with CEO', date: new Date(2024, 9, 10), time: '10:00 AM' },
  ];

  // Filtered list of events

  // Filter events when a date is selected
  onDateSelected(date: Date) {
    this.selectedDate = date;
    this.filteredEvents = this.events.filter((event) =>
      this.isSameDay(event.date, date)
    );
  }

  // Helper function to check if two dates are the same day
  isSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }
}
