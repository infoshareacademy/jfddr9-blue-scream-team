import { Search } from "../components/search";
// import OpenTripMapExample from "../OpenTripMap.jsx"
import AutoLayout from "./cards";
import Footer from "../components/footer";
import CartButton from "../components/CartButton";

export function Home() {
  return (
    <>
      {/* <OpenTripMapExample /> */}
      <Search />
      <AutoLayout />
      <Footer />
      <CartButton />
    </>
  );
}
export default Home;
