import styled from 'styled-components';
import { FiSun, FiStar } from "react-icons/fi";
const StyleContentHeader = styled.ul`
    display: flex;
    align-items: center;
    font-size: 14px;
`
const ItemHeader = styled.li`
    color: white;
    margin-left: 1em;
    display: flex;
`
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
export default function ContentHeader({children, toggleTheme, theme}){
    return (
    <StyleContentHeader>
        <ItemHeader><StyledToggle toggleTheme={toggleTheme}>
            {theme.themeName=='lightTheme'?<FiStar/>:<FiSun/>}    
        </StyledToggle></ItemHeader>
        <ItemHeader><a href="./">cursos</a></ItemHeader>
        <ItemHeader>portifólio</ItemHeader>
        <ItemHeader>contato</ItemHeader>
    </StyleContentHeader>
    )
}
