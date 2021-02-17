import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    margin: 5px;
    outline:none;
    border: none;
    border-radius: 5px;
    padding: 8px;
    font-size: 16px;
    width: 100%;
    height: 400px;
    resize: none;
    :hover{
        background-color: #bfbfbf;
    }
`
const TextArea = ({children, placeholder}) => {
    return <StyledTextArea placeholder={placeholder}>{children}</StyledTextArea>
}
export default TextArea;