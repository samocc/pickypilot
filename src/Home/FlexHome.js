import useWindowDimensions from "../services/useWindowDimensions.hook";
// import MobileHome from "./MobileHome";
import DesktopFlex from "./DesktopFlex";
import MobileFlex from "./MobileFlex";

function FlexHome() {
    const {isMobile} = useWindowDimensions()

    return <div>{isMobile ? <MobileFlex /> : <DesktopFlex/>}</div>
}

export default FlexHome;