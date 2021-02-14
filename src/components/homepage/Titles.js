import styled from 'styled-components';

const H1 = styled.h1`
    background-color: #5bffca;
    color: #232931;
    font-size: 18px;
    padding: 4px;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 40px;
    @media screen and (max-width: 885px){
        margin: 0 auto;
        margin-bottom: 10px;
    }
`
const H2 = styled.h2`
    font-size: 26px;
    max-width: 700px;
    @media screen and (max-width: 885px){
        font-size: 18px;
    }
`
const H3 = styled.h3`
    font-size: 18px;
    font-weight: 100;
    margin-top: 10px;
`
export{
    H1,
    H2,
    H3
}