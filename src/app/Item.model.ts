export class Item{
    name:string;
    quantity:number;
    price:number;
    description:string;

    constructor(name:string,quantity:number,price:number,description:string)
    {
        this.name=name;
        this.quantity=quantity;
        this.price=price;
        this.description=description;
    }
}