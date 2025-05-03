import SongItem from "../components/containers/SongItem";
import { fetchTopTracksByTag } from "../scripts/backend/backend";
import { useEffect, useState } from "react";

const RecentlySearch = () => {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const tracksList = await fetchTopTracksByTag(1, "electronic");
      const { tracks } = tracksList;

      setTracks(tracks.track);
    };
    fetchImage();
  }, []);
  return (
    <>
      <div className="m-auto flex w-5xl gap-5 py-5">
        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-lg bg-gradient-to-tr from-red-200 from-5% via-orange-50 to-teal-200 to-80%">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-history"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8l0 4l2 2" />
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-medium">Recently Played</h2>
          <p>Music from your latest search</p>
        </div>
      </div>
      <section className="m-auto flex w-5xl justify-between py-4">
        {tracks ? (
          <div className="grid w-5xl grid-cols-2 gap-x-4">
            {tracks.map((track) => (
              <SongItem track={track} key={track.mbid}></SongItem>
            ))}
          </div>
        ) : (
          <p className="text-black">Loading...</p>
        )}
      </section>
    </>
  );
};

export default RecentlySearch;
