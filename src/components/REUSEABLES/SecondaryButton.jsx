import React from 'react'

function SecondaryButton(props) {

    const buttonStyle = {
        cursor: 'pointer',
        backgroundColor: '#fff',
        padding: '15px 30px',
        border: '2px solid rgb(66, 109, 169)',
        borderRadius: '30px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        columnGap: '5px',
        fontSize: '17px',
        color: 'rgb(66, 109, 169)',
        justifySelf: props.justifySelf
    };


    return (
        <button style={buttonStyle}>
            {props.text}
            <i className={props.iconClass}></i>
        </button>
    )
}

export default SecondaryButton
