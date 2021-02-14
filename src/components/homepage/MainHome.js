import styled from 'styled-components';
const MainHome = styled.main`
    display: block;
    width: 100vw;
    height: calc(100% - 250px);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:885px){
        height: 100vh;
    }
`
export default MainHome;