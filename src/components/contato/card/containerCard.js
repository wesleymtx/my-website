import styled from 'styled-components'

const ContainerCard = styled.div `
    margin: 100px 0px 50px 0px ;
    width: fit-content;
    display: flex;
    justify-content: center;
    ul{
        margin-left: 10px;
    }
    li{
        padding-bottom: 10px;
    }
    
    @media screen and (max-width: 700px){
        height: 235px;
        width: 90%;
        margin: 50px 0px 50px 0px ;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
       
        
    }
`

export default ContainerCard;
