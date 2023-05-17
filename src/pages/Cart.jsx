import { useSelector } from "react-redux";
export function Cart() {
    const storedAttractions = useSelector(
        (state) => state.cartReducer
      );
      console.log(storedAttractions);
      return null
}