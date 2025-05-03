import Header from "../sections/Header";
import Trandings from "../sections/Trandings";
import RecentlySearch from "../sections/RecentlySearch";
import MyLibrary from "../sections/MyLibrary";

const Main = () => {
  return (
    <>
      <div className="w-screen">
        <Header />
        <Trandings />
        <RecentlySearch />
        <MyLibrary />
      </div>
    </>
  );
};

export default Main;
