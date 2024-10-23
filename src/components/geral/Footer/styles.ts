import styled from "styled-components";
import backgroundImage from '../../../assets/images/heroBackground.png'

export const Footer = styled.footer`
    padding-top:40px;
    background-image: url('${backgroundImage}');
    text-align:center;
    padding-bottom:40px;

    .container > img{
        margin-bottom:30px;
    }
`
export const SocialLinks = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom:80px;

    a{
        margin-right:8px;
    }
`
export const FooterLegenda = styled.p`
    color:var(--rosa);
    font-weight:bold;
`
