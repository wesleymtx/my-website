import styled from 'styled-components';
import ItemHeader from '../header/ItemHeader';
import ToggleTheme from './ToggleTheme';
import menuItems from '../../apis/itemsHeader';

const ContainerContentHeader = styled.ul`
    display: flex;
    align-items: center;
    font-size: 14px;
    @media(max-width:800px){
       display: none;
    }
`

export default function ContentHeader({ toggleTheme }){
    return (
    <>
        <ContainerContentHeader>
            <ToggleTheme toggleTheme={toggleTheme}/>
            {menuItems.map((item, i)=>{
                return <ItemHeader key={i}>{item.title}</ItemHeader>
            })}
        </ContainerContentHeader>
    </>
    
    )
}
