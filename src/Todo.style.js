import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 50px);
    grid-template-rows: repeat(2, 50px);
    justify-items: center;
    align-items: center;
`

export const Text = styled.span`
    grid-column: 1 / 5;
    grid-row: 1 / 2;
    max-width: 200px;
    max-height: 50px;
    word-wrap: break-word;
    overflow: auto;

`
export const Button1 = styled.button`
    height: 50px;
    width: 200px;
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    
`
export const Button2 = styled.button`
    height: 100px;
    width: 100px;
    grid-column: 5 / 7;
    grid-row: 1 / 3;
`