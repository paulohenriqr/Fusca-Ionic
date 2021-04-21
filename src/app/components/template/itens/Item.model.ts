export class Item{
    codigo: number
    nome: string
    estoque: number
    preco: number


    constructor(codigo:number, nome:string, estoque:number, preco:number){
        this.codigo = codigo
        this.nome = nome
        this.estoque = estoque
        this.preco = preco
    }

}