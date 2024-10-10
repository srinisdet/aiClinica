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
    submittedBy: 'Alice',
    date: '2024-10-01',
    reportName: 'Sales Report',
    actions: 'View',
  },
  {
    submittedBy: 'Bob',
    date: '2024-10-02',
    reportName: 'Revenue Report',
    actions: 'View',
  },
  {
    submittedBy: 'Charlie',
    date: '2024-10-03',
    reportName: 'Expense Report',
    actions: 'View',
  },
  {
    submittedBy: 'Bob',
    date: '2024-10-02',
    reportName: 'Revenue Report',
    actions: 'View',
  },
  {
    submittedBy: 'Charlie',
    date: '2024-10-03',
    reportName: 'Expense Report',
    actions: 'View',
  },
  {
    submittedBy: 'Bob',
    date: '2024-10-02',
    reportName: 'Revenue Report',
    actions: 'View',
  },
  {
    submittedBy: 'Charlie',
    date: '2024-10-03',
    reportName: 'Expense Report',
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
}
