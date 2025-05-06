import Header from "../sections/Header";
import Trandings from "../sections/Trandings";
import RecentlyPlayed from "../sections/RecentlyPlayed";
import MyLibrary from "../sections/MyLibrary";

const Main = () => {
  return (
    <>
      <div className="w-screen">
        <Header />
        <Trandings />
        <RecentlyPlayed />
        <MyLibrary />
      </div>
    </>
  );
};

export default Main;
