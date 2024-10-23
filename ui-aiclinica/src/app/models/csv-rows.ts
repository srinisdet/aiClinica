export interface CsvRow {
  AESCAN?: string;
  AESCONG?: string;
  AESDISAB?: string;
  AESDTH?: string;
  AESHOSP?: string;
  AESLIFE?: string;
  AESOD?: string;
  [key: string]: any; // for additional dynamic columns
}
