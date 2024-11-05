import styled from "styled-components";


interface InputGroupProps {
    width?: string
    display?: string
}

export const CartContainer = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    display:flex;
    justify-content: flex-end;
    z-index:3;
`

export const Overlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
`
export const Cart = styled.aside`
    padding:32px 24px;
    background-color:var(--rosa);
    z-index:3;
    width:100%;
    max-width:380px;
    overflow-y:scroll;

    h3{
        color:var(--branco);
        margin-bottom:24px;
    }
    p{
        color:var(--branco);
        margin-bottom:24px;
        font-size:14px;
    }
    

`

export const CartItem = styled.div`
    display:flex;
    margin-bottom:16px;
    z-index:2;
    background-color:var(--rosaClaro);
    padding:8px 12px;
    margin-bottom:16px;
    position:relative;

    img{
        width:80px;
        height:80px;
        object-fit: cover;
        margin-right:8px;
    }
    h3{
        color:var(--rosa);
        font-size:18px;
        font-weight:bold;
        margin-bottom:16px;
    }
    p{
        font-weight:normal;
        color:var(--rosa)
    }
    .excluir{
        width:16px;
        height:16px;
        position:absolute;
        bottom:8px;
        right:8px;

        &:hover{
            cursor:pointer;
        }
    }
`

export const PrecoTotal = styled.div`
    margin-top:24px;
    margin-bottom:16px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    color:white;

    
    & > span{
        display:inline-block;
        color:white;
    }
`

export const Button = styled.button`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    color:var(--rosa);
    background-color:var(--branco);
    font-size:14px;
    padding:4px;
    font-weight:bold;
    border:none;
    margin-bottom:8px;
    text-decoration:none;
    display:block;

    &:hover{
        cursor:pointer;
    }
`

export const CarrinhoVazio = styled.h3`
    color:var(--branco);
`

export const Form = styled.form`
    width:100%;
    
    h3{
        margin-top:16px;
        margin-bottom:16px;
        color:var(--branco);
    }
    margin-bottom:24px;
`

export const InputContainer = styled.div<{display?:string}>`
    margin-bottom:8px;
    display:${props => props.display ? props.display : 'block'};
    justify-content:space-between;
    width:100%;
`

export const InputGroup = styled.div<InputGroupProps>`
    display: ${props => props.display ? props.display : 'block'};
    flex-direction:column;
    width: ${props => props.width? props.width : '100'}%;
`

export const Input = styled.input`
    padding:8px;
    font-size:14px;
    color:#333;
    width:100%;
    border:none;
    font-weight:bold;

    &:focus{
        outline:none;
        box-shadow:0px 4px 4px rgba(0,0,0,0.2);
    }
`

export const Label = styled.label`
    margin-bottom:8px;
    font-size:14px;
    color:var(--branco);
    display:"block";
    flex-direction:column;
    font-weight:bold;
`