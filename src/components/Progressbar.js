import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



class Progressbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percent: props.percent || 0
        }
    }

    onDecreaseClick = () => {
        this.setState({
            percent: this.state.percent - 10 > 0 ? this.state.percent - 10 : 0
        });
    }

    onIncreaseClick = () => {
        this.setState({
            percent: this.state.percent + 10 < 100 ? this.state.percent + 10 : 100 
        })
    }


    render() {
        return(
            <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 20px 0' }}>
                <button onClick={this.onDecreaseClick}>-</button>
                <button onClick={this.onIncreaseClick}>+</button>
                <Progress
                    percent={this.state.percent}
                    style={{ margin: '0 0 0 10px' }}
                />
            </div>
        )
    }
}

export default Progressbar;

