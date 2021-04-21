import { Injectable } from '@angular/core';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens : Item[]


  constructor() { 
    this.itens = [
      new Item(1,"Pneu",22,40.503),
      new Item(2,"Volante",30,40.530),
      new Item(3,"Parabrisa",200,420.50),
      new Item(4,"Fusca",222,140.50),
      new Item(5,"Mobilete",222,140.50),
      new Item(6,"Pedal",222,140.50),
      new Item(7,"Corrente Dentada",222,140.50),
      new Item(8,"banco",222,140.50)
    ]
  }


  getItens(){
    return this.itens;
  }

  getItem(i:number){
    return this.itens[i]
  }

  addItem(codigo:number, nome:string, estoque:number, preco:number){
    this.itens.push(new Item(codigo,nome,estoque,preco))
  }

  editItem(i:number, item:Item){
    this.itens[i] = item;
  }


}
