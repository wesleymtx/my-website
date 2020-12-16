import ContainerHeader from '../components/header/ContainerHeader'
import TitleHeader from '../components/header/TitleHeader'
import ContentHeader from  '../components/header/ContentHeader'
import { useState, useEffect } from 'react'
export default function Header({toggleTheme, theme}){
    return (
        <div>
            <ContainerHeader>
                <TitleHeader>Wesley Gimenez</TitleHeader>
                <ContentHeader toggleTheme={toggleTheme} theme={theme}></ContentHeader>
            </ContainerHeader>
        </div>
    )
}