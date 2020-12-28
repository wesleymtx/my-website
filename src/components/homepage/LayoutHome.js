import styled from 'styled-components';
const ContainerItems = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    max-width: 80%;
`
const ColumnItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
`;
 
export{
    ColumnItems,
    ContainerItems
}