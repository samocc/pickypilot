import useWindowDimensions from "../services/useWindowDimensions.hook";
import MobileHome from "./MobileHome";
import FlexHome from "./FlexHome";

function Home() {
    const {isMobile} = useWindowDimensions()

    return <div>{isMobile ? <MobileHome /> : <FlexHome/>}</div>
}

export default Home;