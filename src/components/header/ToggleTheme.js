import styled from 'styled-components';
import { FiSun, FiStar } from "react-icons/fi";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ToggleTheme = ({className, toggleTheme, style})=>{
    const themeContext = useContext(ThemeContext);
    return (
        <a className={className} style={style} onClick={_=>toggleTheme()}>
         {themeContext.themeName=='lightTheme'?<FiStar/>:<FiSun/>}
        </a>
    )
}

const StyledToggle = styled(ToggleTheme)`
    display: flex;
    color: #ffd369;
    cursor: pointer;
    font-size: 24px;    
`
export default StyledToggle;