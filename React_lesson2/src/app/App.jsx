import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    render() {
        return (
            <div>
                <h1>Приложение на ReactJS</h1>
                <button onClick = {() => {alert(Date())}}>Узнать текущую дату</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
