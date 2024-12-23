export class HardwareItem {
  public itemId: number;
  public name: string;
  public rentalPerDay: number;
  public finePerDay: number;
  public availability: boolean;

  constructor(
    itemId: number,
    name: string,
    rentalPerDay: number,
    finePerDay: number,
    availability: boolean
  ) {
    this.itemId = itemId;
    this.name = name;
    this.rentalPerDay = rentalPerDay;
    this.finePerDay = finePerDay;
    this.availability = availability;
  }

  public setItemId(itemId: number) {
    this.itemId = itemId;
  }
  public getItemId(): number {
    return this.itemId;
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
