import { isReactive } from '@angular/core/primitives/signals';

export class RentalDetail {
  public rentId: number;
  public itemId: number;
  public qty: number;
  public totalItemCost: number;

  constructor(
    rentId: number,
    itemId: number,
    qty: number,
    totalItemCost: number
  ) {
    this.rentId = rentId;
    this.itemId = itemId;
    this.qty = qty;
    this.totalItemCost = totalItemCost;
  }
  public setRentId(rentId: number) {
    this.rentId = rentId;
  }
  public getRentId(): number {
    return this.rentId;
  }
  public setItemId(itemId: number) {
    this.itemId = itemId;
  }
  public getItemId(): number {
    return this.itemId;
  }
  public setQty(qty: number) {
    this.qty = qty;
  }
  public getQty(): number {
    return this.qty;
  }
  public setTotalItemCost(totalItemCost: number) {
    this.totalItemCost = totalItemCost;
  }
  public getTotalItemCost() {
    return this.totalItemCost;
  }
}
