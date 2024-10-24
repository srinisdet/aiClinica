import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import * as Papa from 'papaparse';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CsvRow } from '../models/csv-rows';
import { MatDialog } from '@angular/material/dialog';

// const DisplayColumns = [
//   'STUDYID',
//   'DOMAIN',
//   'AESCAN',
//   'AESCONG',
//   'AESDISAB',
//   'AESDTH',
//   'AESHOSP',
//   'AESLIFE',
//   'AESOD',
// ];
@Component({
  selector: 'app-load-new-report',
  templateUrl: './load-new-report.component.html',
  styleUrl: './load-new-report.component.scss',
})
export class LoadNewReportComponent {
  dataSource: MatTableDataSource<CsvRow>;
  // displayedColumns = DisplayColumns;
  displayedColumns: string[] = [];
  file: File | null = null;
  csvData: CsvRow[] = [];
  isLoading: boolean = false; // To manage spinner visibility

  relevantColumns: string[] = [
    'AESCAN',
    'AESCONG',
    'AESDISAB',
    'AESDTH',
    'AESHOSP',
    'AESLIFE',
    'AESOD',
  ];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild('uploadDialog') uploadDialog!: TemplateRef<any>; // TemplateRef for the modal

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<CsvRow>([]);
    this.loadCsvDataFromSession();
  }

  ngAfterViewInit(): void {
    // Connect sorting after the view is initialized
    this.dataSource.sort = this.sort;
  }
  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.file = input.files[0];
    }
  }
  openUploadDialog(): void {
    this.dialog.open(this.uploadDialog, {
      width: '400px',
    });
  }
  uploadFile(): void {
    if (this.file) {
      this.isLoading = true; // Start showing the loader
      this.dialog.closeAll(); // Close modal after successful upload

      Papa.parse<CsvRow>(this.file, {
        header: true,
        complete: (result) => {
          // const filteredData = result.data.filter((row: CsvRow) => {
          //   return this.relevantColumns.some((col) => row[col] === 'Y');
          // });
          const filteredData = result.data;

          if (filteredData.length > 0) {
            this.displayedColumns = Object.keys(filteredData[0]);
            this.csvData = filteredData;
            this.dataSource.data = filteredData;

            sessionStorage.setItem('csvData', JSON.stringify(filteredData));

            // Manually trigger sorting after data load
            setTimeout(() => {
              this.dataSource.sort = this.sort;
              this.isLoading = false; // Stop showing the loader
            });
          } else {
            this.isLoading = false; // Stop showing the loader even if no data
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          this.isLoading = false; // Stop showing the loader on error
        },
      });
    }
  }

  loadCsvDataFromSession(): void {
    const storedData = sessionStorage.getItem('csvData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.csvData = parsedData;
      this.dataSource.data = parsedData;

      if (parsedData.length > 0) {
        this.displayedColumns = Object.keys(parsedData[0]);
      }

      // Ensure sorting works on page load with stored data
      setTimeout(() => {
        this.dataSource.sort = this.sort;
      });
    }
  }
  isBandedRow(index: number): boolean {
    return index % 2 === 0; // Returns true for even indices, which will apply the banded-row class
  }
}
