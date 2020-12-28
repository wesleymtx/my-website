import styled from 'styled-components';
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
`
const socialMedias = [
    {component:FiLinkedin, alt:"Linkedin icon"},
    {component:FiInstagram, alt:"Instagram icon"},
    {component:FiGithub, alt:"Github icon"},
]   

const RowSocialMedia = ()=>(
    <SocialMedia>
        {socialMedias.map((social)=><a style={{fontSize:'25px'}}><social.component /></a>)}
    </SocialMedia>
)
export default RowSocialMedia;