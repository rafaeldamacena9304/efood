import * as stl from './styles'

import logo from '../../../assets/images/logo.png'

export const Hero = () => {

    return(
        <stl.Hero>
            <div className="container">
                <img src={logo} alt=""/>
                <stl.Titulo>
                    Viva experiências gastronômicas no
                    conforto de sua casa
                </stl.Titulo>
            </div>
        </stl.Hero>
    )
}