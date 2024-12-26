import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HardwareItem } from '../../model/HardwareItem';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-item',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FormsModule, CommonModule],
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

  public id: number = 0;

  search() {
    console.log(this.id);

    this.http
      .get<HardwareItem>(
        `http://localhost:8080/item/search-by-id/?itemID=${this.id}`
      )
      .subscribe((data) => {
        this.item = data;
        console.log(data);
      });
  }
  private upd: HardwareItem = new HardwareItem(0, '', 0, 0, true);
  updateItem() {
    console.log(this.item.finePerDay.toString() + 'befor Update');
    this.upd.itemID = this.id;
    this.upd.name = this.item.name;
    this.upd.rentalPerDay = this.item.rentalPerDay;
    this.upd.finePerDay = this.item.finePerDay;
    this.upd.availability = this.item.availability;
    console.log(this.upd.availability + 'befor Update');
    console.log(this.upd.itemID.toString() + 'befor Update');
    console.log(this.upd.finePerDay.toString() + 'after Update');
    this.http
      .put('http://localhost:8080/item/update', this.upd)
      .subscribe((data) => {
        if (data) {
          console.log(data);
          this.id = 0;
          this.item = new HardwareItem(0, '', 0, 0, true);
          alert('Success');
        }
      });
    console.log(this.upd.name.toString() + 'after Updated');
  }

  saveItem(item: HardwareItem) {
    this.http
      .post('http://localhost:8080/item/save', item)
      .subscribe((data) => {
        if (data) {
          console.log(data);
          this.id = 0;
          this.item = new HardwareItem(0, '', 0, 0, true);
          alert('Success');
        }
      });
    console.log(item);
  }

  delete() {
    if (this.id > 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.http
              .delete(
                'http://localhost:8080/item/delete-by-id/?itemID=' + this.id
              )
              .subscribe((data) => {
                if (data) {
                  swalWithBootstrapButtons.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                  });
                  this.id = 0;
                  this.item = new HardwareItem(0, '', 0, 0, true);
                } else {
                  swalWithBootstrapButtons.fire({
                    title: 'Error!',
                    text: 'Your file did not delete.',
                    icon: 'error',
                  });
                }
              });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: 'Cancelled',
              text: 'Your imaginary file is safe :)',
              icon: 'error',
            });
          }
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Insert Valid ID',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  }
}
