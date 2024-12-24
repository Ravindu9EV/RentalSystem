import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HardwareItem } from '../../model/HardwareItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  constructor(private http: HttpClient) {
    this.loadItems();
  }

  public items: HardwareItem[] = [];
  loadItems() {
    this.http
      .get<HardwareItem[]>('http://localhost:8080/item/get-all')
      .subscribe((data) => {
        this.items = data;
        console.log(data);

        console.log(this.items);
      });
  }
}
