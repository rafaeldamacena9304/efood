import * as stl from './styles'

import logo from '../../../assets/images/logo.png'
import instagram from '../../../assets/images/instagram.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'

export const Footer = () => {

    return(
        <stl.Footer>
            <div className="container">
                <img src={logo} alt=""/>
                <stl.SocialLinks>
                    <a href="/">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="/">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="/">
                        <img src={twitter} alt="" />
                    </a>
                </stl.SocialLinks>
                <stl.FooterLegenda>
                    A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
                </stl.FooterLegenda>
            </div>
        </stl.Footer>
    )
}