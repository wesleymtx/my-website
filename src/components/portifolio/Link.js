import styled from 'styled-components';

const Link = styled.a.attrs(()=>({
    target: "_blank",
}))`
    background-color: #845ec2;
    font-size: 14px;
    border-radius: 5px;
    margin: 15px;
    padding: 0px 5px;
    color: white!important;
    transition: 0.5s;
    :hover{
        background-color:#784cbf;
    }
`

export default Link;