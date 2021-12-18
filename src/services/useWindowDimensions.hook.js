import { useState, useEffect } from 'react';

const mobileBreakpoint = 820;
const fullWidth = 1366;

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    const isMobile = width < mobileBreakpoint ;
    const scale = width / fullWidth > 1 ? 1 : width / fullWidth;
    return {
        width,
        height,
        isMobile,
        scale
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