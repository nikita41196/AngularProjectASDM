import { Injectable } from '@angular/core';
import { Item } from './Item.model';

@Injectable()
export class ItemService{
    
    arr=[
        new Item("pizza",2,230,"large size"),
        new Item("burger",1,70,"with cheese"),
        new Item("sandwich",3,150,"without cheese"),
        new Item("lays",2,40,"salted"),
        new Item("coke",4,50,"lemon flavour"),
    ]; 

    getAllItems():Item[]
    {
        return this.arr;
    }

    addItem(p:Item)
    {
            this.arr.push(p);
            console.log(this.arr);
    }
}