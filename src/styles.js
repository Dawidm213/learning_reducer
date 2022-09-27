import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: grey;
        overflow: hidden;
    }
    svg{
        position: absolute;
        z-index: -10;
        @media (max-width: 840px) {
  }
    }
    g{
        -webkit-filter: blur(2px);
    }
`
export const IncDecBtn = styled.div`

  color: white;
`

export const InputContainer = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
    

    input{
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid gray;
        outline: 0;
        font-size: 1.3rem;
        color: white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }
    }
    label{
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: gray;
        }
            input:focus {
        ~ label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            color: #11998e;  
        }
        padding-bottom: 6px;  
        border-width: 3px;
        border-image: linear-gradient(to right, #11998e,#38ef7d);
        border-image-slice: 1;
        }
        /* reset input */
        input{
        &:required,&:invalid { box-shadow:none; }
        }

`
export const Box1 = styled.div`
    display: flex;
    justify-content: center;
    height: 20vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {

  }
    
`
export const Box2 = styled.div`
    justify-items: center;
    display: grid;
    height: 80vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 0 auto;
    overflow: auto;
    overflow-x: hidden;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(calc(${(props) => props.data} / 3 + 1), 6rem);
    justify-content: center;
    grid-gap: 1.5rem;
    @media (max-width: 840px) {
        grid-template-columns: repeat(1, 80%);
        grid-template-rows: repeat(calc(${(props) => props.data} / 1 + 1), 6rem);

  }
`