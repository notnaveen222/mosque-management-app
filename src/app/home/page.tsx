import HomeHeader from "./components/HomeHeader";
import UserMosque from "./components/UserMosque";

export default function Home() {
  const AMOUNT = 20750;
  return (
    <div className=" flex flex-col px-2 min-h-screen">
      <HomeHeader amount={AMOUNT} />
      <UserMosque />
    </div>
  );
}
