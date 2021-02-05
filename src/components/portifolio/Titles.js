import { FaBluetooth } from 'react-icons/fa'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    margin-top: 50px;
    margin-bottom: 10px;
    outline:none;
`

export const H2 = ({children})=>{
    return <StyledH2>{children}</StyledH2>
}
