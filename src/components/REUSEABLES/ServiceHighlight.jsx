import React, { useEffect, useState } from 'react'

function ServiceHighlight(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 1300;


    const containerStyle = {
        display: 'flex',
        overflowX: isTablet ? 'auto' : 'visible',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: isTablet ? '0px 10px' : '0px 170px',
        justifyContent: 'center',
        columnGap: '20px',
        marginBlock: isTablet ? '50px' : '0px',
    };

    const contentStyle = {
        width: '40%',
        // height: '630px',
        height: '750px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        backgroundColor: '#fff',
        minWidth: isTablet ? '350px' : 'auto',
        marginBlock: isTablet ? '2%' : '50px',
    };

    const imageStyle = {
        width: '100%',
        height: '40%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
    };

    const innerDivStyle = {
        padding: '35px',
    };

    const h4Style = {
        fontFamily: '"Roboto", Tahoma, helvetica, arial, sans-serif',
        marginBottom: '20px',
        color: '#2d2d2dfd',
        letterSpacing: '0.9px',
        fontSize: '12px',
        fontWeight: 'bolder',
        textTransform: 'uppercase',
        position: 'relative',
        paddingLeft: '9%',
        display: 'flex',
    };

    const beforeStyle = {
        content: "''",
        position: 'absolute',
        width: '7.5%',
        height: '3px',
        backgroundColor: 'gold',
        display: 'flex',
        alignSelf: 'center',
        left: 0,
    };

    const h3Style = {
        fontSize: '24px',
        lineHeight: '32px',
        color: '#242424',
        fontFamily: '"Roboto", Tahoma, helvetica, arial, sans-serif',
        fontWeight: '500',
        width: '95%',
        marginBottom: '10px',
    };

    const pStyle = {
        color: '#242424',
        width: '90%',
        lineHeight: '25px',
    };



    return (
        <section style={containerStyle}>

            <div style={contentStyle}>
                <img src={props.image1} alt="Initiative Visual" style={imageStyle} />
                <div style={innerDivStyle}>
                    <h4 style={h4Style}>
                        {props.category1}
                        <div style={beforeStyle}></div>
                    </h4>
                    <h3 style={h3Style}>{props.title1}</h3>
                    <p style={pStyle}>{props.description1}</p>
                </div>
            </div>

            <div style={contentStyle}>
                <img src={props.image2} alt="Initiative Visual" style={imageStyle} />
                <div style={innerDivStyle}>
                    <h4 style={h4Style}>
                        {props.category2}
                        <div style={beforeStyle}></div>
                    </h4>
                    <h3 style={h3Style}>{props.title2}</h3>
                    <p style={pStyle}>{props.description2}</p>
                </div>
            </div>

            <div style={contentStyle}>
                <img src={props.image3} alt="Initiative Visual" style={imageStyle} />
                <div style={innerDivStyle}>
                    <h4 style={h4Style}>
                        {props.category3}
                        <div style={beforeStyle}></div>
                    </h4>
                    <h3 style={h3Style}>{props.title3}</h3>
                    <p style={pStyle}>{props.description3}</p>
                </div>
            </div>
        </section>
    )
}

export default ServiceHighlight
