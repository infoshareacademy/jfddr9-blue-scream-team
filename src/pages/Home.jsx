import { Search } from "../components/search";
import OpenTripMapExample from "../OpenTripMap.jsx";
import Tile from "../components/Tile";
import { useSelector } from "react-redux";

function Home() {
  const attractions = useSelector((state) => state);
  console.log(attractions);
  return (
    <>
      {/* <OpenTripMapExample /> */}
      <Search />
      <Tile />
    </>
  );
}
export default Home;
