import { getTopArtists } from "../scripts/backend/backend";
import { useEffect, useState } from "react";

const MyLibrary = () => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const fetchTopArtists = async () => {
      const topArtistsList = await getTopArtists();
      const { artists } = topArtistsList;
      console.log(artists.artist);

      setArtists(artists.artist);
    };
    fetchTopArtists();
  }, []);
  return (
    <>
      <div className="m-auto flex w-5xl gap-5 py-4">
        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-lg bg-gradient-to-tr from-red-200 from-5% via-orange-50 to-teal-200 to-80%">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-medium">Your Library</h2>
          <p>Your playlists & saved tracks.</p>
        </div>
      </div>
      <section className="m-auto flex w-5xl justify-between py-4">
        <div className="flex cursor-pointer flex-col gap-2">
          <div className="flex h-55 w-55 items-center justify-center rounded-2xl border-2 border-neutral-200 bg-white hover:border-3 hover:border-blue-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </div>
          <p className="text-lg">Build a new playlist</p>
        </div>
        <div className="flex cursor-pointer flex-col gap-2">
          <img
            className="block aspect-square w-55 overflow-hidden rounded-2xl object-cover"
            src="https://i.ibb.co/xdMf51N/wp12137965.jpg"
            alt=""
          />
          <p className="text-lg">My playlist#1</p>
        </div>
        <div className="flex cursor-pointer flex-col gap-2">
          <img
            className="block aspect-square w-55 overflow-hidden rounded-2xl object-cover"
            src="https://i.ibb.co/tk2KfR4/fitness-apps-64e6264448140.jpg"
            alt=""
          />
          <p className="text-lg">Sport Motivation Music 2025</p>
        </div>
        <div className="flex cursor-pointer flex-col gap-2">
          <div className="block h-55 w-55 rounded-2xl bg-white"></div>
          <p className="text-lg"></p>
        </div>
      </section>
    </>
  );
};

export default MyLibrary;
