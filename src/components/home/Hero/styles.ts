import styled from "styled-components";
import heroBackground from '../../../assets/images/heroBackground.png'

export const Hero = styled.section`
    text-align:center;
    background-image: url('${heroBackground}');
    padding-top:64px;
    padding-bottom:40px;
    margin-bottom:80px;
    
    img{
        margin-bottom:140px;
    }
`
export const Titulo = styled.h1`
    font-weight:900;
    font-size:36px;
    max-width:540px;
    margin:0 auto;
    color:var(--rosa)
`