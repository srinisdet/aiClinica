import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

export interface ReportData {
  submittedBy: string;
  date: string;
  reportName: string;
  actions: string;
}

const REPORT_DATA: ReportData[] = [
  {
    submittedBy: 'Bruce B',
    date: '2024-10-11',
    reportName: 'Molecules Report',
    actions: 'View',
  },
  {
    submittedBy: 'Tony S',
    date: '2024-10-02',
    reportName: 'Rx Research Report',
    actions: 'View',
  },
  {
    submittedBy: 'Shuri',
    date: '2024-09-30',
    reportName: 'Molecule Study Report',
    actions: 'View',
  },
  {
    submittedBy: 'Tony S',
    date: '2024-09-22',
    reportName: 'Rx Research Report',
    actions: 'View',
  },
  {
    submittedBy: 'Shuri',
    date: '2024-09-18',
    reportName: 'Molecule Study Report',
    actions: 'View',
  },
  {
    submittedBy: 'Tony S',
    date: '2024-09-12',
    reportName: 'Rx Research Report',
    actions: 'View',
  },
  {
    submittedBy: 'Shuri',
    date: '2024-09-06',
    reportName: 'Molecule Study Report',
    actions: 'View',
  },
  // Add more records...
];

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  reportData: ReportData[] = REPORT_DATA;
  paginatedReportData!: ReportData[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.paginatedReportData = this.reportData.slice(0, 5); // Default pagination slice
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

  getImage(person: string) {
    if (person == 'Tony S') return 'assets/images/tony.jpg';
    else if (person == 'Bruce B') return 'assets/images/bruce.png';
    else return 'assets/images/shuri.png';
  }
}
