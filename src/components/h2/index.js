import { FaBluetooth } from 'react-icons/fa'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    color: #551a8b;
    margin:5px;
    outline:none;
`
const H2 = ({children})=>{
    return <StyledH2>{children}</StyledH2>
}
export default H2;