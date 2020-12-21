import styled from 'styled-components';
import styles from '../../styles/header.module.css'
import { FaBars } from "react-icons/fa";
import ItemHeader from './ItemHeader'
const AsideMenu = styled.aside`
    position: fixed;
    width: 0px;
    background-color: blue;
    top: 100px;
    right: 0;
    transition: all 1s;
  
`
const ContentHideMenu = styled.ul`
    display: flex;
    flex-direction: column;
`

export default function HideMenu(){
    return (
        <>
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
            <FaBars/>
        </label>
            <AsideMenu className="side-menu">
                <ContentHideMenu>
                    <ItemHeader className={styles.red}>ok</ItemHeader>
                    <ItemHeader>ok</ItemHeader>
                </ContentHideMenu>
            </AsideMenu>
        </>
    )
}