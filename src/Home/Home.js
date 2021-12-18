import useWindowDimensions from "../services/useWindowDimensions.hook";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";

function Home() {
    const {isMobile} = useWindowDimensions()

    return <div>{isMobile ? <MobileHome /> : <DesktopHome/>}</div>
}

export default Home;