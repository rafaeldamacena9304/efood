export interface ItemCardapioType {
    nome: string,
    preco: number,
    descricao: string
    imagem: string
}

export class RestauranteClass {
    id: number
    nome: string
    avaliacao:number
    descricao:string
    infos: string[]
    imagem: string
    cardapio?: ItemCardapioType[]
    tipo:string
    backgroundImage: string

    constructor(
        id:number,
        nome:string,
        avaliacao:number,
        descricao:string,
        infos: string[],
        imagem: string,
        cardapio:ItemCardapioType[],
        tipo:string,
        backgroundImage:string
    )
    {
        this.id = id,
        this.nome = nome,
        this.avaliacao = avaliacao
        this.descricao = descricao
        this.infos = infos
        this.imagem = imagem
        this.cardapio = cardapio
        this.tipo = tipo
        this.backgroundImage = backgroundImage
    }
}