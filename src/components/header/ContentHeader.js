import styled from 'styled-components';
import ToggleTheme from './ToggleTheme';
import menuItems from '../../apis/itemsHeader';
import Link from 'next/link'
import StyledLink from './StyledLink'
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
                return <Link key={i} href={item.href}><StyledLink>{item.title}</StyledLink></Link>
            })}
        </ContainerContentHeader>
    </>
    
    )
}
