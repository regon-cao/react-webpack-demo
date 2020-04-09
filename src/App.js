import React from 'react';
import Hello from './components/Hello'
export default  class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return <div>
            <Hello text="It works, you make a progress!"/>
        </div>
    }
}




