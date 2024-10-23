import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReportsComponent } from './reports/reports.component';
import { LoadNewReportComponent } from './load-new-report/load-new-report.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'reports/load-report', component: LoadNewReportComponent }, // Sub-navigation for Reports
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
