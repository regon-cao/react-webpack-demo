import React from 'react';
import reactPng from '../../resources/images/react.png';

export  default class Hello extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {text} = this.props;
        return <div >
            <section style={{display:'flex',justifyContent:'center'}}>
                <img src={reactPng} alt="react" />
            </section>
            <main>
                <div style={{textAlign:'center'}}>{text}</div>
            </main>
        </div>
    }
}