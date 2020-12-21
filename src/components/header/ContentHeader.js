import styled from 'styled-components';
import ItemHeader from '../header/ItemHeader';
import StyledToggle from './ToggleThemeButton';
import { FiSun, FiStar } from "react-icons/fi";
const ContainerContentHeader = styled.ul`
    display: flex;
    align-items: center;
    font-size: 14px;
    @media(max-width:500px){
       display: none;
    }
`



export default function ContentHeader({children, toggleTheme, theme}){
    return (
    <>
        <ContainerContentHeader>
        <StyledToggle toggleTheme={toggleTheme}>
            {theme.themeName=='lightTheme'?<FiStar/>:<FiSun/>}
        </StyledToggle>
        <ItemHeader>cursos</ItemHeader>
        <ItemHeader>portifólio</ItemHeader>
        <ItemHeader>contato</ItemHeader>
    </ContainerContentHeader>
    </>
    
    )
}
