import useWindowDimensions from "../services/useWindowDimensions.hook";
import DesktopFlex from "./DesktopFlex";
import MobileFlex from "./MobileFlex";

function FlexHome() {
    const {isMobile} = useWindowDimensions()

    return <div>{isMobile ? <MobileFlex /> : <DesktopFlex/>}</div>
}

export default FlexHome;