import React from 'react';
import AppName from './AppName';
import Time from './Time';
import SelectTime from './SelectTime';
import Message from './Message';

class LifeTime extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lifeTime: null
        }
    }

    calculate() {
        alert('人生の可処分時間')
    }
    render() {
        return(
            <div className="lifetime">
             <AppName />
             <Time />
             <SelectTime />
             <Message />
            </div>
        );
    }
}

export default LifeTime;