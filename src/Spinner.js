import React from 'react';
import SeasonDisplay from "./SeasonDisplay";

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// Default props -- default props to the component

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;