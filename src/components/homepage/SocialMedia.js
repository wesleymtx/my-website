import styled from 'styled-components';
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const StyledRowSocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
`

const StyledIconMedia = styled.a.attrs(()=>({
    target: '_blank'
}))`
    font-size: 30px;
    text-decoration: none;
    transition: 0.2s;
    
    :hover{
        transform: translateY(1.5px)

    }
`

const socialMedias = [
    {component:FiLinkedin, alt:"Linkedin icon", href:"https://www.linkedin.com/in/wesleygimenez/"},
    {component:FiYoutube, alt:"Instagram icon", href:"https://www.youtube.com/channel/UCfSGeCRvVEAxRJylUr1eGjg"},
    {component:FiGithub, alt:"Github icon", href:"https://github.com/wesleymtx"},
]   

const RowSocialMedia = ()=>(
    <StyledRowSocialMedia>
        {socialMedias.map((social, idx)=><StyledIconMedia key={idx} href={social.href}><social.component /></StyledIconMedia>)}
    </StyledRowSocialMedia>
)
export default RowSocialMedia;