import styled from "styled-components";
import backgroundImage from '../../../assets/images/heroBackground.png';
import { Link } from "react-router-dom";

export const Header = styled.header`
    background-image:url('${backgroundImage}');
    padding:60px 0;

    .container{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const HeaderLink = styled(Link)`
    color:var(--rosa);
    text-decoration:none;
    font-weight:bold;
`