import MainHome from '../components/homepage/MainHome';
import {ColumnItems, ContainerItems} from '../components/homepage/LayoutHome';
import PhotoProfile from '../components/photoProfile/PhotoProfile';
import {H1, H2, H3} from '../components/homepage/Titles';
import RowSocialMedia from '../components/homepage/SocialMedia';

export default function HomePage(){
    return <>
        <MainHome>
            <ContainerItems>
            <ColumnItems>
                <PhotoProfile src='foto-perfil.jpg'/>
                <RowSocialMedia/>
            </ColumnItems>
            <ColumnItems style={{marginLeft: '50px'}}>
                <H1>Desenvolvedor Front -End</H1>
                <H2>Trabalho com o desenvolvimento de aplicações webs e integrações com o backend.</H2>
                <H3>Tecnologias que já utilizei: Node, Next JS, React</H3>
            </ColumnItems>
            </ContainerItems>
        </MainHome>
    </>
}