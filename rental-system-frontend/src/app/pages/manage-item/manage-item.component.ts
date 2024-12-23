import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HardwareItem } from '../../model/HardwareItem';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-item',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css',
})
export class ManageItemComponent {
  constructor(private http: HttpClient) {}
  public item: HardwareItem = new HardwareItem(0, '', 0, 0, true);
  //{
  // itemId: 0,
  // name: '',
  // rentalPerDay: 0,
  // finePerDay: 0,
  // availability: true,
  //  };

  saveItem(item: HardwareItem) {
    this.http
      .post('http://localhost:8080/item/save', item)
      .subscribe((data) => {
        if (data) {
          console.log(data);
          alert('Success');
        }
      });
    console.log(item);
  }
}
