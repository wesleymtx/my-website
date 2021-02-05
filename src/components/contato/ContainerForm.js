import styled from 'styled-components'

const StyledContainerForm = styled.form`
    align-items: center;
    position: absolute;
    top: 0px;
	width: 100%;
	height: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    
`

const ContainerForm = ({children})=>{
    return <StyledContainerForm>{children}</StyledContainerForm>
}

export default ContainerForm;
