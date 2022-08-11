import {AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

function Contact(){
    return(
        <div className = "appli">
            <AiFillTwitterSquare className = "icone"/>
            <AiFillFacebook className = "icone"/>
            <AiFillInstagram className = "icone"/>
            <AiFillLinkedin className = "icone"/>
            <AiFillGithub className = "icone"/>
        </div>
    );
}

export default Contact;