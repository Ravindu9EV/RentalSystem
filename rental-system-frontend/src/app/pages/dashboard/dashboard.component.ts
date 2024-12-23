import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ManageItemComponent } from '../manage-item/manage-item.component';
import { ManageRentalComponent } from '../manage-rental/manage-rental.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    ManageRentalComponent,
    ManageItemComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
