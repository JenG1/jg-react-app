import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
            <h1 className='heading-background'>Jen genes</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
                {/* <p className='header-title '>
                    {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
                    {data.headerTagline[2]}
                    <br></br>
                </p> */}
            <ReactTypingEffect className="header-title typingeffect type-font" text={['Hello, My name is Jen. I am a Full Stack Developer from Baltimore, MD.']} speed={100} eraseDelay={900} />
            </Fade>



        </div>);
    }
}

export default Header;