import styled from 'styled-components';
import { FiSun, FiStar } from "react-icons/fi";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const StyledToggle = styled.span`
    display: flex;
    color: #ffd369;
    cursor: pointer;
    font-size: 24px;    
`

const ToggleTheme = ({className, toggleTheme})=>{
    const themeContext = useContext(ThemeContext);
    return (
        <StyledToggle className={className} onClick={_=>toggleTheme()}>
         {themeContext.themeName=='lightTheme'?<FiStar/>:<FiSun/>}
        </StyledToggle>
    )
}


export default ToggleTheme;