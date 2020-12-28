import styled from 'styled-components'
const StyleTitleHeader = styled.p`
    color: #5bffca;
    font-size: 28px;
`
export default function TitleHeader({children}){
return <StyleTitleHeader>{children}</StyleTitleHeader>
}