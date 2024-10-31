import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { close } from '../../../redux/Cart/cartReducer'

import * as stl from "./styles"
import imageTest from '../../../assets/images/pizza.png'

export const Cart = () => {

    const dispatch = useDispatch()

    const { isOpen } = useSelector((state:RootState) => state.cart)

    const fecharCarrinho = () => {
        dispatch(close())
    }
    

    if (isOpen === true){
        return(
            <stl.CartContainer>
                <stl.Overlay onClick={fecharCarrinho} />
                    <stl.Cart>
                        <stl.CartItem>
                            <img src={imageTest} alt="" />
                            <div>
                                <h3>Pizza Marguerita</h3>
                                <p>R$69,90</p>
                            </div>
                        </stl.CartItem>
                        <stl.PrecoTotal>
                                <span>Valor total</span>
                                <span>R$199,90</span>
                            </stl.PrecoTotal>
                            <stl.Button>Continuar com a compra</stl.Button>
                    </stl.Cart>
            </stl.CartContainer>
        )
    }
    return <></>
}