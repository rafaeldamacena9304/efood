import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { open } from '../../../redux/Cart/cartReducer'

import * as stl from './styles'

import logo from '../../../assets/images/logo.png'


export const Header = () => {

    const dispatch = useDispatch()

    const { items, isOpen } = useSelector((state: RootState) => state.cart)

    const abrirCarrinho = () => {
        dispatch(open())
    }

    return(
        <stl.Header>
            <div className="container">
                <stl.HeaderLink to="/">Restaurantes</stl.HeaderLink>
                <img src={logo} alt="" />
                <stl.HeaderLink onClick={abrirCarrinho} to="#">{items.length} - produto(s) no carrinho</stl.HeaderLink>
            </div>
        </stl.Header>
    )
}