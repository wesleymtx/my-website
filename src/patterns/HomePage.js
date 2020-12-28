import MainHome from '../components/homepage/MainHome';
import {ColumnItems, ContainerItems} from '../components/homepage/LayoutHome';
import PhotoProfile from '../components/photo-profile/PhotoProfile';
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
                <H1>Fullstack Developer</H1>
                <H2>Trabalho no desenvolvimento de aplicações web performáticas e com foco na experiência de usuário</H2>
                <H3>Tecnologias que já utilizei: Node, Adonis, React, Gatsby e Next</H3>
            </ColumnItems>
            </ContainerItems>
        </MainHome>
    </>
}