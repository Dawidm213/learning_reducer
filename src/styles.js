import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: grey;
        overflow: hidden;
    }
    svg{
        position: absolute;
        z-index: -10;
    }
    g{
        -webkit-filter: blur(4px);
    }
`


export const InputContainer = styled.div`
    input{
        height: 1.5rem;
        width: 200px;
        font-size: 20px;
        border: 2px solid;
    }
`