import styled from 'styled-components'

const StyledItemHeader = styled.a`
    color: white;
    margin-left: 20px;
    font-size: 20px;
    color: white!important;
`

const ItemHeader = ({ className, children, href })=>(
        <StyledItemHeader href={href}>{children}</StyledItemHeader>
)

export default ItemHeader;