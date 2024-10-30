export interface ItemCardapioType {
    id: number,
    nome: string,
    preco: number,
    descricao: string,
    foto: string
}

export class RestauranteClass {
    id: number
    titulo: string
    avaliacao:number
    descricao:string
    imagem: string
    destaque: boolean
    cardapio?: ItemCardapioType[]
    tipo:string
    capa: string

    constructor(
        id:number,
        titulo:string,
        avaliacao:number,
        descricao:string,
        imagem: string,
        destaque:boolean,
        cardapio:ItemCardapioType[],
        tipo:string,
        capa:string
    )
    {
        this.id = id,
        this.titulo = titulo,
        this.avaliacao = avaliacao
        this.descricao = descricao
        this.imagem = imagem
        this.destaque = destaque
        this.cardapio = cardapio
        this.tipo = tipo
        this.capa = capa
    }
}