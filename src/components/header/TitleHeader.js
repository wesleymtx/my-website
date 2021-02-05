import styled from 'styled-components'
const StyleTitleHeader = styled.a`
    color: #5bffca!important;
    font-size: 28px;
`
export default function TitleHeader({children, href}){
return <StyleTitleHeader href={href}>{children}</StyleTitleHeader>
}