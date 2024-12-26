import { RentalDetail } from "./RentalDetail";

export class Rental{
    public rentID:number;
    public rentalDate:string;
    public returnDate:string;
    public dueDate:string;
    public fine:boolean;
    public totalCost:number;
    public rentalDetails:RentalDetail[];

    constructor (rentID:number,rentalDate:string,returnDate:string,dueDate:string,fine:boolean,totalCost:number,rentalDetails:RentalDetail[]){
        this.rentID=rentID;
        this.rentalDate=rentalDate;
        this.returnDate=returnDate;
        this.dueDate=dueDate;
        this.fine=fine;
        this.totalCost=totalCost;
        this.rentalDetails=rentalDetails;
    }

    public setRentID(rentID:number){
        this.rentID=rentID;
    }
    public getRentID():number{
        return this.rentID;
    }
    public setRentalDate(rentalDate:string){
        this.rentalDate=rentalDate;
    }
    public getRentalDate():string{
        return this.rentalDate;
    }
    public setReturnDate(returnDate:string){
        this.returnDate=returnDate;
    }
    public getReturnDate():string{
        return this.returnDate;
    }
    public setDueDate(dueDate:string){
        this.dueDate=dueDate;
    }
    public getDueDate():string{
        return this.dueDate;
    }
    public setTotalCost(totalCost:number){
        this.totalCost=totalCost;
    }
    public getTotalCost():number{
        return this.totalCost;
    }
    public setRentalDetails(rentalDetails:RentalDetail[]){
        this.rentalDetails=rentalDetails;
    }
    public getRentalDetails():RentalDetail[]{
        return this.rentalDetails;
    }
}