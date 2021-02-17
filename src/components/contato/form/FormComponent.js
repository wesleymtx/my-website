import styled from 'styled-components'

const StyledContentForm = styled.form`
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #cecece;
    width: 500px;
    height: 400px;
    border-radius: 10px;
    @media screen and (max-width: 700px){
        padding: 0.5rem;
        width: 90%;
        h2{
            font-size: 18px;
        }
        input, textarea{
            font-size: 12px;
        }
    }
    
`

const ContentForm = ({children, onSubmit})=>{
    return <StyledContentForm onSubmit={onSubmit}>{children}</StyledContentForm>
}

export default ContentForm;