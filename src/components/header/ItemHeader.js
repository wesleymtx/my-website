import styled from 'styled-components'
import styles from '../../styles/header.module.css'
import ToggleThemeButton from './ToggleThemeButton'
const HeaderComponent = ({ className, children, teste })=>(
    <li className={className}>
        {children}
    </li>
)
const ItemHeader = styled(HeaderComponent)`
    color: white;
    font-size: 16px;
    margin-left: 1em;
`

export default ItemHeader;