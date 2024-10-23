import { RestauranteClass } from "../../../models/RestauranteClass"
import * as stl from './styles'
import star from '../../../assets/images/star.png'

export const Restaurante = (props: RestauranteClass) => {

    return(
        <stl.Restaurante>
            <stl.TagContainer>
                {props.infos.map(info => (
                    <stl.Tag key={info}>{info}</stl.Tag>
                ))}
            </stl.TagContainer>
            <img src={props.imagem} alt=""/>
            <stl.NomeContainer>
                <span>{props.nome}</span>
                <stl.AvaliacaoContainer>{props.avaliacao}<img src={star} alt=""/></stl.AvaliacaoContainer>
            </stl.NomeContainer>
            <stl.Descricao>{props.descricao}</stl.Descricao>
            <stl.Button to={`/restaurante/${props.tipo}`}>Saiba mais</stl.Button>
        </stl.Restaurante>
    )
}