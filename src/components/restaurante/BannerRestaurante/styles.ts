import styled from "styled-components";

export const Banner = styled.div`
    margin-bottom:80px;
    background-size:cover;
    position:relative;
    
    &::after{
        content:'';
        background-color:rgba(0,0,0,0.5);
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
`
export const Tipo = styled.p`
    margin-bottom:150px;
    font-size:32px;
    color:var(--branco);
    font-weight:100;
    z-index:2;
    position:relative;
`
export const Nome = styled.h1`
    font-size:32px;
    font-weight:900;
    color:var(--branco);
    z-index:2;
    position:relative;
`