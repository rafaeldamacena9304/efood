import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemCardapioContainer = styled.div`
    padding:8px;
    background-color:var(--rosa);
    height:435px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    img{
        width:100%;
        height:200px;
        object-fit: cover;
    }
`
export const Titulo = styled.h3`
    font-weight:900;
    color:var(--branco);
    margin-bottom:16px;
`
export const Descricao = styled.p`
    font-size:14px;
    color:var(--branco);
    margin-bottom:8px;
`
export const Button = styled(Link)`
    background-color:var(--branco);
    color:var(--rosa);
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    padding:4px 0px;
    text-decoration:none;
`   