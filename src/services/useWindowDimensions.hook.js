import { useState, useEffect } from 'react';

const mobileBreakpoint = 880;

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    const isMobile = width < mobileBreakpoint ;
    return {
        width,
        height,
        isMobile
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}