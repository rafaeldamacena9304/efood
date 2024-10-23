import styled from "styled-components";
import { Link } from "react-router-dom";

export const Restaurante = styled.div`
    border:1px solid var(--rosa);
    position:relative; 
`
export const NomeContainer = styled.div`
    font-size:18px;
    color:var(--rosa);
    font-weight:bold;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:8px;
`
export const TagContainer = styled.div`
    position:absolute;
    top:16px;
    right:16px;
    display:flex;
`
export const Tag = styled.div`
    font-size:12px;
    font-weight:bold;
    color:var(--branco);
    border:none;
    background-color:var(--rosa);
    margin-right:8px;
    padding:4px 6px;
`
export const Descricao = styled.p`
    color:var(--rosa);
    font-size:14px;
    padding:8px;
`
export const AvaliacaoContainer = styled.span`
    display:flex;
    align-items: center;
    
    img{
        margin-left:4px;
    }
`
export const Button = styled(Link)`
    padding:4px 6px;
    background-color:var(--rosa);
    color:var(--branco);
    font-weight:bold;
    font-size:14px;
    display:inline-block;
    margin-left:8px;
    text-decoration:none;
    margin-bottom:8px;
`