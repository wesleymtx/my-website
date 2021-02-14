import ContainerHeader from '../components/header/ContainerHeader'
import TitleHeader from '../components/header/TitleHeader'
import ContentHeader from  '../components/header/ContentHeader'
import HideMenu from '../components/header/HideMenu'
import Link from 'next/link'
export default function Header({toggleTheme, theme}){
    return (
        <>
            <ContainerHeader>
                <Link href="/"><a><TitleHeader/></a></Link>
                <ContentHeader toggleTheme={toggleTheme} theme={theme}></ContentHeader>
                <HideMenu toggleTheme={toggleTheme}></HideMenu>
            </ContainerHeader>
        </>
    )
}