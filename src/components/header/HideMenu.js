import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import ItemHeader from './ItemHeader';
import ToggleTheme from './ToggleTheme';
import menuItems from '../../apis/itemsHeader';

const HideItemHeader = styled(ItemHeader)`
    padding: 8px 16px;
    margin: 0px;
    border-bottom: 1px solid #fff;
    a{
        margin: 5px;
    }
`

const AsideMenu = styled.aside`
    position: fixed;
    width: 200px;
    top: 42px;
    right: -200px;
    transition: all 0.5s;
`

const ContentHideMenu = styled.ul`
    background-color: #232931;
    display: flex;
    flex-direction: column;
`
const ToggleBtn = styled.label`
  color: #fff;
  float: right;
  cursor: pointer;
  display: none;
  @media (max-width: 800px){
    display: flex;
    align-items: center;
  }
`
const CheckInput = styled.input`
    display: none;
    &:checked ~ ${AsideMenu}{
        right: 0px;
    }
`
export default function HideMenu({toggleTheme}){
    return (
        <>
         <CheckInput type="checkbox" id="check"/>
        <ToggleBtn htmlFor="check">
            <FaBars/>
        </ToggleBtn>
            <AsideMenu className="side-menu">
                <ContentHideMenu>
                    {menuItems.map((item, i)=>{
                        return <HideItemHeader key={i}>{item.title}</HideItemHeader>
                    })}
                    <ToggleTheme style={{padding: "8px 16px"}} toggleTheme={toggleTheme}/>
                </ContentHideMenu>
            </AsideMenu>
        </>
    )
}