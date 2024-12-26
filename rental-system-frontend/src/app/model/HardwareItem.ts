export class HardwareItem {
  public itemID: number;
  public name: string;
  public rentalPerDay: number;
  public finePerDay: number;
  public availability: boolean;

  constructor(
    itemID: number,
    name: string,
    rentalPerDay: number,
    finePerDay: number,
    availability: boolean
  ) {
    this.itemID = itemID;
    this.name = name;
    this.rentalPerDay = rentalPerDay;
    this.finePerDay = finePerDay;
    this.availability = availability;
  }

  public setItemID(itemID: number) {
    this.itemID = itemID;
  }
  public getItemID(): number {
    return this.itemID;
  }
  public setName(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  public setrentalPerDay(rentalPerDay: number) {
    this.rentalPerDay = rentalPerDay;
  }
  public getRentalPerDay(): number {
    return this.rentalPerDay;
  }
  public setFinePerDay(finePerDay: number) {
    this.finePerDay = finePerDay;
  }
  public getFinePerDay(): number {
    return this.finePerDay;
  }
  public setAvailability(availability: boolean) {
    this.availability = availability;
  }
  public getAvailability(): boolean {
    return this.availability;
  }
}
