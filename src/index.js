import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me';
}

const App = () => {
    const labelText = {
        text: "Enter Name: "
    };
    return (
        <div>
            <label className="label">
                {labelText.text}
                <input id="name" type="text "/>    
            </label>   
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);