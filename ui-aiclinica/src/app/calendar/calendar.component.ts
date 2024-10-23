import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  csvData: any[] = [];
  displayedColumns: string[] = [
    'AESCAN',
    'AESCONG',
    'AESDISAB',
    'AESDTH',
    'AESHOSP',
    'AESLIFE',
    'AESOD',
  ];
  filteredData: any[] = [];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngOnInit(): void {
    this.loadCsvDataFromSession();
  }

  ngAfterViewInit(): void {
    // Connect the sort to the table data source
    this.filteredData = this.csvData;
  }

  // Method to load CSV data from session storage
  loadCsvDataFromSession(): void {
    const storedData = sessionStorage.getItem('csvData');
    if (storedData) {
      this.csvData = JSON.parse(storedData);
      this.filterCsvData(); // Apply filtering after loading data
    }
  }

  // CSV upload method
  onCsvUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          // Filter the data here if necessary
          this.csvData = result.data.filter(
            (row: any) =>
              row.AESCAN === 'Y' ||
              row.AESCONG === 'Y' ||
              row.AESDISAB === 'Y' ||
              row.AESDTH === 'Y' ||
              row.AESHOSP === 'Y' ||
              row.AESLIFE === 'Y' ||
              row.AESOD === 'Y'
          );

          // Store the parsed data in session storage
          sessionStorage.setItem('csvData', JSON.stringify(this.csvData));
          this.filterCsvData(); // Apply filtering after uploading
        },
      });
    }
  }

  // Method to filter data based on your criteria
  private filterCsvData(): void {
    this.filteredData = this.csvData; // Use this if you want all data loaded from session
  }
}
