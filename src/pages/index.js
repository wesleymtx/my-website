import MainHome from '../components/homepage/MainHome';
import {ColumnItems, ContainerItems} from '../components/homepage/LayoutHome';
import PhotoProfile from '../patterns/PhotoProfile';
import {H1, H2, H3} from '../components/homepage/Titles';
import RowSocialMedia from '../components/homepage/SocialMedia';
import Head from 'next/head'

export default function HomePage(){
    return <>
        <Head>
          <title>Página inicial</title>
          <meta name="google-site-verification" content="R86txzepkoBAbhQ2O-obkmZKrNo8VlUWI9Rsd1uJ670" />
        </Head>
        <MainHome>
            <ContainerItems>
            <ColumnItems>
            <div>
                <PhotoProfile src='foto-perfil.jpg'/>
                <RowSocialMedia/>
            </div>
            </ColumnItems>
            <ColumnItems>
                <H1>Desenvolvedor Front -End</H1>
                <H2>Trabalho com o desenvolvimento de aplicações webs e integrações com o backend.</H2>
                <H3>Tecnologias que já utilizei: Node, Next JS, React</H3>
            </ColumnItems>
            </ContainerItems>
        </MainHome>
    </>
}