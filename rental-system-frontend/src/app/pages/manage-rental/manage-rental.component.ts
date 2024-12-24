import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HardwareItem } from '../../model/HardwareItem';
import { RentalDetail } from '../../model/RentalDetail';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-rental',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-rental.component.html',
  styleUrl: './manage-rental.component.css',
})
export class ManageRentalComponent {
  constructor(private http: HttpClient) {}
  public id: number = 0;
  public item: HardwareItem = new HardwareItem(0, '', 0, 0, true);
  public rental: any = { rentalDate: '' };
  public rentalDetail: RentalDetail = new RentalDetail(0, 0, 0, 0);
  private rentalDetails: RentalDetail[] = [];

  searchItem(id: number) {
    console.log(id);
    this.http
      .get<HardwareItem>(
        `http://localhost:8080/item/search-by-id/?itemID=${id}`
      )
      .subscribe((data) => {
        if (data != null) {
          this.item = data;
          console.log(this.item);

          this.setRentalDetail(this.item);
        }
      });
  }

  public setRentalDetail(item: HardwareItem) {
    if (item.availability === true) {
      this.rentalDetail.setItemId(item.itemId);

      console.log();
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons.fire({
        title: 'Oops!',
        text: 'Item is unavailable .',
        icon: 'error',
      });
    }
  }
  public setTotalItemCost() {
    this.rentalDetail.totalItemCost = this.item.rentalPerDay * this.rental.qty;
    console.log(this.rentalDetail.totalItemCost );

    this.rentalDetails.push(this.rentalDetail);
  }

  public confirm() {
    this.http
      .post('http://localhost:8080/rental/save', this.rental)
      .subscribe((data) => {
        if (data != null) {
          alert('success');
        }
      });
  }
}
