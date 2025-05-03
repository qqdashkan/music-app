import Header from "../sections/Header";
import Trandings from "../sections/Trandings";
import RecentlySearch from "../sections/RecentlySearch";

const Main = () => {
  return (
    <>
      <div className="w-screen">
        <Header />
        <Trandings />
        <RecentlySearch />
      </div>
    </>
  );
};

export default Main;
