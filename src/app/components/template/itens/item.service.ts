import { Injectable } from '@angular/core';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private itens : Item[]


  constructor() {
    this.itens = [
      new Item(1,"Volante",'Automotivo',180.53,30,'Fusca 1'),
      new Item(2,"Pneu",'Automotivo',279.53,42,'Fusca 2'),
      new Item(3,"Farol",'Automotivo',120.53,42,'Fusca 3'),
      new Item(4,"Buzina",'Automotivo',30.53,30,'Fusca 2'),
      new Item(5,"Alarme",'Automotivo',195.53,42,'Fusca 3'),
      new Item(6,"Embragem",'Automotivo',240.53,42,'Fusca 1'),

    ]
  }


  getItens(){
    return this.itens;
  }

  getItem(i:number){
    return this.itens[i]
  }






}


