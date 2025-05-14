import React, { useEffect, useState } from 'react'
import PrimaryButton from './PrimaryButton'

function HeroSection(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 1300;
    const isMobile = windowWidth <= 850;


    const h1Style = {
        width: isMobile ? '100%': 'auto',
        marginTop: isTablet ? '0px' : '20px',
        textAlign: 'center',
        fontSize: isMobile ? '32px' : '64px',
        lineHeight: isMobile ? '40px' : '80px',
        padding: isTablet ? '2em 0px' : '0px 200px 130px',
        color: '#212529',
        position: 'relative',
    };

    const afterStyle = {
        display: isTablet ? 'none' : 'auto',
        content: "''",
        position: 'absolute',
        width: '7%',
        height: '5px',
        top: '65%',
        left: '46.5%',
        backgroundColor: 'gold',
        borderRadius: '10px',
        zIndex: 1,
    };


    const firstImgStyle = {
        backgroundImage: `url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: isMobile ? '100%' : '1180px',
        height: '616px',
        justifySelf: 'center',
        position: 'relative',
        display: 'flex',
    };

    const innerDivStyle = {
        backgroundColor: 'white',
        position: 'absolute',
        marginLeft: isTablet ? '10%' : props.marginLeft,
        marginTop: '10%',
        width: isMobile ? '80%' : '40%',
        padding: '60px 50px',
        borderRadius: '10px',
    };


    const h4Style = {
        fontFamily: '"Roboto", Tahoma, Helvetica, Arial, sans-serif',
        marginBottom: '20px',
        color: '#2d2d2d',
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
        left: '0',
    };

    const h3Style = {
        fontSize: '32px',
        lineHeight: '40px',
        fontFamily: '"Roboto", Tahoma, Helvetica, Arial, sans-serif',
        fontWeight: '500',
        width: '90%',
        marginBottom: '20px',
    };

    const pStyle = {
        marginBottom: '32px',
        width: '90%',
    };


    return (
        <article className='hero-section'>
            <h1 style={h1Style}>
                {props.header}
                <div style={afterStyle}></div>
            </h1>

            <div style={firstImgStyle}>
                <div style={innerDivStyle}>
                    <h4 style={h4Style}>
                        {props.heroContentHeader}
                        <div style={beforeStyle}></div>
                    </h4>
                    <h3 style={h3Style}>{props.title}</h3>
                    <p style={pStyle}>{props.description}</p>
                    {props.children}
                </div>
            </div>
        </article>
    )
}

export default HeroSection

