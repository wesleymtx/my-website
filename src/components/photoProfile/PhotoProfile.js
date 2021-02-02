import styled from 'styled-components';

const ContainerPhotoProfile = styled.div`
    overflow: hidden;
    height: 150px;
    width: 150px;
    border-radius: 50%;

`
const StyledPhotoProfile = styled.img`
    height: 150px;
    width: 150px;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
    background-color: white;
    border: 1px solid white;
    transition: 0.3;
    :hover{
        transform: scale(1.02);
        border: 2px solid white;
    }
`

const PhotoProfile = ({children, src})=>{
    return <ContainerPhotoProfile>
        <StyledPhotoProfile src={src}>{children}</StyledPhotoProfile>
    </ContainerPhotoProfile>
}

export default PhotoProfile;