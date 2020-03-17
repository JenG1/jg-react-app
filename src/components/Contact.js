import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {}
    render() {
        return (<div>
            <h1>
                <Fade bottom cascade></Fade>
            </h1>
            <Fade bottom>
                <div className='contact-content'>
                    <h1>Interested?</h1>
                    <h1>
                        <span className='amazing-color'>Contact Me</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                    <div className ="cell">{data.contactCell}</div>
                    <ul>
                        {data.social.map((link, index) => (
                            <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
            </Fade>
        </div>);
    }
}

export default Contact;