import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {HelpInfoComponent} from '../../help-info/help-info.component';

export const AdminLayoutRoutes: Routes = [

    {path: 'dashboard', component: DashboardComponent},
    {path: 'emergency-contact', component: TableListComponent},
    {path: 'Help-and-information', component: HelpInfoComponent},
];
