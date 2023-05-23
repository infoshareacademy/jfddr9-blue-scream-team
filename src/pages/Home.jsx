import { Search } from "../components/search";
// import OpenTripMapExample from "../OpenTripMap.jsx"
import AutoLayout from "./cards";
import Footer from "../components/footer";
import CartButton from "../components/CartButton";
import Background from "./background";

export function Home() {
  return (
    <>
      {/* <OpenTripMapExample /> */}
      {/* <Background /> */}
      <Search />
      <AutoLayout />
      <CartButton />
    </>
  );
}
export default Home;
