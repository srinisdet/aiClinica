import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ReportData {
  submittedBy: string;
  date: string;
  reportName: string;
  actions: string;
}

const REPORT_DATA: ReportData[] = [
  {
    submittedBy: 'Alice',
    date: '2024-10-21',
    reportName: 'Sales Report',
    actions: 'View',
  },
  {
    submittedBy: 'Bob',
    date: '2024-10-12',
    reportName: 'Revenue Report',
    actions: 'View',
  },
  {
    submittedBy: 'Alice',
    date: '2024-10-01',
    reportName: 'Sales Report',
    actions: 'View',
  },
  {
    submittedBy: 'Bob',
    date: '2024-09-25',
    reportName: 'Revenue Report',
    actions: 'View',
  },
  {
    submittedBy: 'Alice',
    date: '2024-08-20',
    reportName: 'Sales Report',
    actions: 'View',
  },
  {
    submittedBy: 'Bob',
    date: '2024-08-02',
    reportName: 'Revenue Report',
    actions: 'View',
  },
];

@Component({
  selector: 'app-reports-table2',
  templateUrl: './reports-table2.component.html',
  styleUrl: './reports-table2.component.scss',
})
export class ReportsTable2Component {
  displayedColumns: string[] = ['submittedBy', 'date', 'reportName', 'actions'];
  dataSource = new MatTableDataSource(REPORT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onRowClick(row: ReportData) {
    console.log('Row clicked: ', row);
    // Handle row click, e.g., load the corresponding graph based on the row data
  }
}
