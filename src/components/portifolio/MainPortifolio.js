import  styled from 'styled-components';


const StyledMainPortifolio = styled.main`
    width: 80vw;

    margin: 0 auto;
`

const MainPortifolio = ({children})=>{
    return <StyledMainPortifolio>{children}</StyledMainPortifolio>
}

export default MainPortifolio;