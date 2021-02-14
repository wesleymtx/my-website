import styled from 'styled-components';
const ContainerItems = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    @media screen and (max-width:885px){
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }
`

const ColumnItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin: 0px 10px;
    @media screen and (max-width:885px){
        margin: 10px 0px;
        
    }
`;
 
export{
    ColumnItems,
    ContainerItems
}