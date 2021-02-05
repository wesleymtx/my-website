import styled from 'styled-components'
const StyledContainHeader = styled.div`
  background: #232931;
  color: white;
  display: flex;
  font-size: 1em;
  position: relative;
  padding: 0.25em 10%;
  justify-content: space-between;
  z-index: 10;
`;

export default function ContainerHeader({children}){
return <StyledContainHeader>{children}</StyledContainHeader>
}