import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class Project extends Component {
    state = {}
    render() {
        return (
            <Fade bottom>
                <div className='project'>
                    <a href={this.props.url}>
                        <img src={this.props.imageSrc} alt={this.props.title}></img>
                    </a>
                    <h1>{this.props.title}</h1>
                    <a href={this.props.service}>
                    <span>{this.props.service}</span>
                    </a>
                </div>
            </Fade>);
    }
}

export default Project;