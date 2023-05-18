import { Search } from "../components/search";
// import OpenTripMapExample from "../OpenTripMap.jsx"
import AutoLayout from "./cards";
import Footer from "../components/footer";

export function Home() {
  return (
    <>
    
    {/* <OpenTripMapExample /> */}
    <Search />
    <AutoLayout />
    <Footer />
    </>
  )
}
export default Home;
