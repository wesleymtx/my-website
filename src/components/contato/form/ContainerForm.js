import styled from 'styled-components'

const StyledContainerForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    
`

const ContainerForm = ({children})=>{
    return <StyledContainerForm>{children}</StyledContainerForm>
}

export default ContainerForm;
