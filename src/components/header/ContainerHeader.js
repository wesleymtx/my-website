import styled from 'styled-components'
const StyleContainHeader = styled.div`
  /* Adapt the colors based on primary prop */
  background: #232931;
  color: white;
  font-size: 1em;
  padding: 0.25em 10%;
  display: flex;
  justify-content: space-between;
`;

export default function ContainerHeader({children}){
return <StyleContainHeader>{children}</StyleContainHeader>
}