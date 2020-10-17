import React from 'react';
import './../styles/Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return <footer>
        <p>This is a footer</p>
        <GitHubIcon className='gitHubIcon'/>
    </footer>
}

export default Footer;