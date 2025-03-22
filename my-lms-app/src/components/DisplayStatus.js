import React from 'react';

function DisplayStatus({ type, message }) {
    const style = {
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        fontSize: '20px',
        color: type === 'success' ? 'green' : 'red',
        backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
        borderRadius: '5px',
        marginTop: '10px',
    };

    return <div style={style}>{message}</div>;
}

export default DisplayStatus;