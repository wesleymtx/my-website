import styled from 'styled-components'

const HeaderComponent = ({ className, children })=>(
    <li className={className}>
        <a>{children}</a>
    </li>
)

const ItemHeader = styled(HeaderComponent)`
    font-size: 24px;
    margin-left: 1em;
`

export default ItemHeader;