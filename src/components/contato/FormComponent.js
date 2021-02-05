import styled from 'styled-components'

const StyledContentForm = styled.form`
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #cecece;
    position: absolute;
    width: fit-content;
    height: 400px;
    border-radius: 10px;
    
`

const ContentForm = ({children, onSubmit})=>{
    return <StyledContentForm onSubmit={onSubmit}>{children}</StyledContentForm>
}

export default ContentForm;