import styled from 'styled-components'

const StyledInputText = styled.input`
    border: none;
    outline: 0;
    margin: 5px;
    transition: 0.3s;
    border-radius: 5px;
    padding: 8px;
    font-size: 16px;
    width: 100%;
    :hover{
        background-color: #bfbfbf;
    }

`

export default function InputText({placeholder}){
    return (
        <StyledInputText placeholder={placeholder}/>    
    )
}
