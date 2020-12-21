import styled from 'styled-components';
import { FiSun, FiStar } from "react-icons/fi";

const Link = ({className, children, toggleTheme})=>(
    <a className={className} onClick={_=>toggleTheme()}>
        {children}
    </a>
)

const StyledToggle = styled(Link)`
    display: flex;
    color: #ffd369;
    cursor: pointer;
`
export default StyledToggle;