import { Component } from '@angular/core';
import { Item } from '../Item.model';
import { ItemService } from '../item.service';

@Component({
    selector:'item',
    templateUrl:'item.component.html',
    styleUrls:['item.component.css'],
})

export class ItemComponent{
    name:string;
    quantity:number;
    price:number;
    description:string;

    arr:Item[]=[];
    constructor(private pservice:ItemService)
    {
        console.log("pservice");
    }

    ngOnInit()
    {
        this.arr=this.pservice.getAllItems();
    }

    addProduct(){
        let p=new Item(this.name,this.quantity,this.price,this.description);
        this.pservice.addItem(p);
        this.name="";
        this.quantity=0;
        this.price=0;
        this.description=" ";
    }

    submitForm(val:any){
        console.log(val);
    }

}