import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ManageItemComponent } from './pages/manage-item/manage-item.component';
import { ManageRentalComponent } from './pages/manage-rental/manage-rental.component';
import { ItemsComponent } from './pages/items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardComponent,
    NavbarComponent,
    ManageItemComponent,
    ManageRentalComponent,
    ItemsComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rental-system-frontend';
}
