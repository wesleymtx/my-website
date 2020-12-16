import styled from 'styled-components'
const StyleTitleHeader = styled.p`
    color: #5bffca;
    font-weight: 700;
`
export default function TitleHeader({children}){
return <StyleTitleHeader>{children}</StyleTitleHeader>
}