import { ItemService } from './../itens/item.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

onSubmit(form:any){

  let codigo : number = 0
  let nome : string = ''
  let estoque: number = 0
  let preco: number = 0

  codigo = Number(form.value.codigo)
  nome = form.value.nome
  estoque = Number(form.value.estoque)
  preco = Number(form.value.preco)




this.itemService.addItem(codigo,nome,estoque,preco)

alert("Item Cadastrado com sucesso!")

}

}
