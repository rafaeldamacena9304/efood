import * as stl from './styles'
import logo from '../../../assets/images/logo.png'


export const Header = () => {

    return(
        <stl.Header>
            <div className="container">
                <stl.HeaderLink to="/">Restaurantes</stl.HeaderLink>
                <img src={logo} alt="" />
                <stl.HeaderLink to="/">0 - produto(s) no carrinho</stl.HeaderLink>
            </div>
        </stl.Header>
    )
}