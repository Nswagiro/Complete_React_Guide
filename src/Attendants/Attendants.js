import React from 'react';

const Attendants = (props) => {
    const styles = {
        color : 'white',
        margin : '10px'
    }
    return (
        <div>
            <span style={styles}>
                {props.name}
            </span>
        </div>
    )
}

export default Attendants;