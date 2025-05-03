import Player from "./Player";
import SongsList from "./SongsList";

function Body({
  tracks,
  loading,
  onEdit,
  onPaginate,
  onDeleted,
  sortField,
  setSortField,
  onPlayTrack,
  uploadAudio,
  currentSong,
}) {
  return (
    <div className="m-auto w-5xl">
      <div className="m-auto flex justify-center px-4 pb-6">
        {currentSong ? (
          <Player className="h-1/2 w-2/6" currentTrack={currentSong} />
        ) : (
          <p className="w-2/6 text-center text-white">Player not available</p>
        )}
        <div className="flex w-4/6 flex-col items-center justify-center">
          <SongsList
            tracks={tracks}
            loading={loading}
            onEdit={onEdit}
            onPaginate={onPaginate}
            onDeleted={onDeleted}
            sortField={sortField}
            setSortField={setSortField}
            onPlay={onPlayTrack}
            setAudio={uploadAudio}
          ></SongsList>
        </div>
      </div>
    </div>
  );
}

export default Body;
