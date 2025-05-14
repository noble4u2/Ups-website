import React, { useEffect, useState } from 'react'

function PromoSection(props) {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 1300;
    const isMobile = windowWidth <= 850;


    const containerStyle = {
        marginTop: '90px',
        display: 'flex',
        width: isTablet ? '100%' : '1180px',
        height: isTablet ? 'fit-content' : '590px',
        justifySelf: 'center',
        borderRadius: isMobile ? '0px' : '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        marginBottom: '20px',
        overflow: 'hidden',
        flexDirection: isTablet ? 'column' : 'row',
        alignItems: 'center',
    };

    const imageStyle = {
        borderTopLeftRadius: isTablet ? '0px' : '10px',
        borderBottomLeftRadius: isTablet ? '0px' : '10px',
        height: isTablet ? '50%' : '100%',
        width: isMobile ? '100%' : '50%',
        objectFit: 'cover',
        minWidth: isTablet ? '415px' : 'auto',
        minHeight: isTablet ? '500px' : 'auto',
        order: props.imageOrder,
    };

    const contentStyle = {
        borderTopRightRadius: isTablet ? '0px' : '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: 'white',
        padding: '72px 64px',
        width: isTablet ? '100%' : '50%',
        boxSizing: 'border-box',
        height: isTablet ? '50%' : '100%',
        order: props.contentOrder,
    };

    const h4Style = {
        fontFamily: '"Roboto", Tahoma, helvetica, arial, sans-serif',
        color: '#2d2d2d',
        letterSpacing: '2.08px',
        fontSize: '13px',
        fontWeight: 'bolder',
        position: 'relative',
        display: 'flex',
        marginBottom: '24px',
        marginRight: '20px',
    };

    const beforeStyle = {
        content: "''",
        position: 'absolute',
        width: '25%',
        height: '3.5px',
        backgroundColor: 'gold',
        display: isTablet ? 'none' : 'flex',
        alignSelf: 'center',
        right: '450px',
        borderRadius: '5px',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    const h3Style = {
        marginBottom: '24px',
        fontSize: '48px',
        fontWeight: '300',
    };

    const pStyle = {
        fontSize: '16px',
        marginBottom: '32px',
        color: '#242424',
        lineHeight: '25px',
    };

    return (
        <article style={containerStyle}>
            <img src={props.image} alt="Section Visual" style={imageStyle} />
            <div style={contentStyle}>
                <h4 style={h4Style}>
                    {props.category}
                    <div style={beforeStyle}></div>
                </h4>
                <h3 style={h3Style}>{props.title}</h3>
                <p style={pStyle}>{props.description}</p>
                {props.children}
            </div>
        </article>
    )
}

export default PromoSection
