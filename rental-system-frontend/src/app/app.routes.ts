import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageItemComponent } from './pages/manage-item/manage-item.component';
import { ManageRentalComponent } from './pages/manage-rental/manage-rental.component';
import { ItemsComponent } from './pages/items/items.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'manage-item',
    component: ManageItemComponent,
  },
  {
    path: 'manage-rental',
    component: ManageRentalComponent,
  },
  {
    path:"items",
    component:ItemsComponent
  }
];
