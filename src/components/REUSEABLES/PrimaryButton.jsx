import React from 'react'

function PrimaryButton(props) {

    const buttonStyle = {
        cursor: 'pointer',
        backgroundColor: '#ffc400',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '30px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        columnGap: '5px',
        fontSize: '17px',
        justifySelf: props.justifySelf,
        justifyContent : 'space-between',
    };

    return (
        <button style={buttonStyle}>
            <span>{props.text}</span> <i className={props.iconClass}></i>
        </button>
    )
}

export default PrimaryButton
