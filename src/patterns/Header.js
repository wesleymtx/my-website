import ContainerHeader from '../components/header/ContainerHeader'
import TitleHeader from '../components/header/TitleHeader'
import ContentHeader from  '../components/header/ContentHeader'
import HideMenu from '../components/header/HideMenu'
export default function Header({toggleTheme, theme}){
    return (
        <>
            <ContainerHeader>
                <TitleHeader href="/"><strong>Wesley</strong> Gimenez</TitleHeader>
                <ContentHeader toggleTheme={toggleTheme} theme={theme}></ContentHeader>
                <HideMenu toggleTheme={toggleTheme}></HideMenu>
            </ContainerHeader>
        </>
    )
}