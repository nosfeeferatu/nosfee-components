import Image from "next/image";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <CardList />
    </div>
  );
}
