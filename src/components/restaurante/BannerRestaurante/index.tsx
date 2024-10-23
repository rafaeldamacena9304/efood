import * as stl from './styles'

interface BannerProps{
    imagem: string,
    tipo:string,
    nome:string,
}

export const BannerRestaurante = (props: BannerProps) => {

    return(
        <stl.Banner style={{backgroundImage:`url(${props.imagem})`}}>
            <div className="container">
                <stl.Tipo>{props.tipo}</stl.Tipo>
                <stl.Nome>{props.nome}</stl.Nome>
            </div>
        </stl.Banner>
    )
}