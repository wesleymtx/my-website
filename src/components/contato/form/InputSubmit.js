import styled from 'styled-components'

const StyledInputSubmit = styled.input.attrs(()=>({
    type: "submit",
}))`
    background-color: #5bffca;
    border-radius: 5px;
    outline: none;
    border: none;
    margin: 5px;
    padding: 4px;
    font-size: 16px;
    font-weight: 600;
    width: 100px;
    :hover{
        background-color: #0af7aa;
    }

`
export default function InputSubmit({children, value, onSubmit}){
    return <StyledInputSubmit onSubmit={onSubmit} value={value}>{children}</StyledInputSubmit>
}