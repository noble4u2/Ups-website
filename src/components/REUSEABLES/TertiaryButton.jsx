import React from 'react'

function TertiaryButton(props) {

    const buttonStyle = {
        cursor: 'pointer',
        backgroundColor: props.backgroundColor,
        padding: '15px 30px',
        border: '2px solid #C6C6C6',
        borderRadius: '30px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        columnGap: '5px',
        fontSize: '17px',
        color: '#C6C6C6',
        justifySelf: props.justifySelf,
        justifyContent: 'center',
        width: '175px'
    };

    return (
        <div>
            <button style={buttonStyle}>
                {props.text}
                <i className={props.iconClass}></i>
            </button>
        </div>
    )
}

export default TertiaryButton
