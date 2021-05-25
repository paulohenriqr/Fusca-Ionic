import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './components/template/itens/Item.model';

@Pipe({
  name: 'filtroNome'
})
export class FiltroNomePipe implements PipeTransform {

  transform( itens: Item[], texto: string ): Item[] {

    if ( texto.length === 0 ) { return itens; }

    texto = texto.toLocaleLowerCase();

    return itens.filter( item => {
      return item.descricao.toLocaleLowerCase().includes(texto)
             || item.loja.toLocaleLowerCase().includes(texto);
    });

  }

}
