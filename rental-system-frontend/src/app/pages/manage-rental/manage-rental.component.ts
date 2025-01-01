import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HardwareItem } from '../../model/HardwareItem';
import { RentalDetail } from '../../model/RentalDetail';
import Swal from 'sweetalert2';
import { Rental } from '../../model/Rental';

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

  public rentalDetail: RentalDetail = new RentalDetail(0, 0, 0, 0);
  //private rentalDetails: {rentId:number,itemId:number,qty:number,totalItemCost:number}[] =[];
  public rentalDetails: RentalDetail[] = []; //new RentalDetail(0,0,0,0);
  public rental: Rental = new Rental(
    0,
    '',
    '',
    '',
    true,
    0,
    //this.rentalDetails
    []
  );
  public cart: Rental = new Rental(0, '', '', '', true, 0, []);
  private total: number = 0;
  public test: number[] = [];
  public itemName: string[] = [];
  searchItem(id: number) {
    this.rentalDetail.qty = 0;
    this.rentalDetail.totalItemCost = 0;
    console.log(id);
    this.http
      .get<HardwareItem>(
        `http://localhost:8080/item/search-by-id/?itemID=${id}`
      )
      .subscribe((data) => {
        if (data != null) {
          if (data.availability === true) {
            this.item = data;
            this.rentalDetail.itemId = id;
            console.log(this.item);
            console.log(this.rentalDetail.itemId + 'id');

            // this.rentalDetail.itemId = Number.parseInt(
            //   this.item.itemId.toString()
            // );
            console.log(this.rentalDetail);
            //this.rentalDetails.push(this.rentalDetail);
            console.log(this.rentalDetails);
            this.rental.rentalDetails.push(this.rentalDetail);
            console.log(this.rentalDetails + '  pused');
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
      });
  }

  public qt: number = 0;
  public setTotalItemCost(qt: number) {
    //this.rental.qty = qt;
    this.rentalDetail.qty = qt;
    //this.rentalDetail.itemId = this.item.itemId;
    console.log(this.item.rentalPerDay * this.rentalDetail.qty);
    this.rentalDetail.totalItemCost =
      this.item.rentalPerDay * this.rentalDetail.qty;

    console.log(this.rentalDetail.qty);

    //console.log(this.rentalDetail.totalItemCost );
    console.log(2 * 7);
  }
  addToRent() {
    // this.rentalDetails.push(this.rentalDetail);
    //this.rental.rentalDetails = this.rentalDetails;

    this.setRentalCost(this.rentalDetail);
    this.rentalDetails.push(this.rentalDetail);
    this.itemName.push(this.item.name);
    console.log(this.rentalDetails + '[]');
    console.log(this.rentalDetail.itemId);
    this.test.push(this.qt++); // this.rental.totalCost =
    //   this.rental.totalCost +
    //   Number.parseInt(this.rentalDetail.totalItemCost.toString());
    this.cart = this.rental;
    console.log(this.rentalDetail.totalItemCost + this.rental.totalCost);
    this.rentalDetail = new RentalDetail(0, 0, 0, 0);
    this.item = new HardwareItem(0, '', 0, 0, true);
    this.qt = 0;
    this.id = 0;
  }

  setRentalCost(detail: RentalDetail) {
    this.total += detail.totalItemCost;
    this.rental.totalCost =
      this.rental.totalCost + Number.parseInt(detail.totalItemCost.toString());
    this.cart.totalCost=this.rental.totalCost;
    //this.rental.totalCost = total;
    console.log(this.rental.totalCost + 'yo');
    console.log(this.rentalDetail.qty + 'qt');
    console.log(this.rental.rentalDetails + 'after');
  }

  removeFromCart(ind: number, detail: RentalDetail) {
    let newDetails: RentalDetail[] = [];

    for (let det of this.rentalDetails) {
      if (det != detail) {
        newDetails.push(det);
      }
    }
    this.setNames(ind);
    this.rentalDetails = newDetails;
  }
  setNames(ind: number) {
    let newNames: string[] = [];
    for (let i = 0; i < this.itemName.length; i++) {
      if (i != ind) {
        newNames.push(this.itemName[i]);
      }
    }
    this.itemName = newNames;
  }
  public stored: boolean = false;
  public confirm() {
    console.log(this.rental.rentalDetails);
    console.log(this.test);
    console.log(this.rental);

    this.http
      .post('http://localhost:8080/rental/save', this.rental)
      .subscribe((data) => {
        if (data != null) {
          this.stored = true;

          this.total = 0;
        }
      });
  }
}
