import useWindowDimensions from "../services/useWindowDimensions.hook";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";

function Home() {
    const {isMobile} = useWindowDimensions()

    return <div>{isMobile ? <MobileHome /> : <DesktopHome/>}</div>
}

export default Home;