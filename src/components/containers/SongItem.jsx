import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";

function SongItem({ track, setPlayerTrack }) {
  const { artist, name, listeners } = track;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-wrap: nowrap; my-2 flex h-[65px] w-xl cursor-pointer justify-between rounded-2xl border-0 bg-teal-100/20 py-1.5 ps-5 pe-3 hover:bg-teal-100/50">
      <div
        className="absolute h-[65px] w-md overflow-auto"
        onClick={() => setPlayerTrack(track)}
      ></div>

      <div className="flex-1 items-center justify-center">
        <strong className="text-start font-medium">{artist.name}</strong>
        <p>{name}</p>
      </div>
      <div className="flex w-24 justify-end">
        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative cursor-pointer rounded-4xl p-1 text-sm font-medium"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-heart h-6 w-6 text-[#008194]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative cursor-pointer rounded-4xl p-1 text-sm font-medium hover:bg-[#008194]"
            type="button"
          >
            <svg
              className="h-6 w-6 text-[#008194] hover:text-teal-100 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="3"
                d="M12 6h.01M12 12h.01M12 18h.01"
              />
            </svg>
          </button>
          {isOpen && (
            <Dropdown
              id={listeners}
              edit={"Edit"}
              remove={"Delete"}
              onCloseMenu={setIsOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SongItem;
