const Trandings = () => {
  return (
    <>
      <div className="m-auto flex w-5xl gap-5 py-4">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-music"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M9 17v-13h10v13" />
            <path d="M9 8h10" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-medium">Trending</h2>
          <p>These music perfectly match your searches and your profile.</p>
        </div>
      </div>
      <section className="m-auto flex w-5xl justify-between py-4">
        <div className="flex cursor-pointer flex-col gap-2">
          <img
            className="block aspect-square w-55 overflow-hidden rounded-2xl object-cover"
            src="https://i.ibb.co/hJbCTjcV/6006c78182f0b05-upscaled.jpg"
            alt=""
          />
          <p className="text-xl">Hits Remixed</p>
        </div>
        <div className="flex cursor-pointer flex-col gap-2">
          <img
            className="block aspect-square w-55 overflow-hidden rounded-2xl object-cover"
            src="https://i.ibb.co/W4sVkjQW/db5c3cc13cf911eebe8602c370ea8a2f-upscaled.jpg"
            alt=""
          />
          <p className="text-xl">Pop Fresh</p>
        </div>
        <div className="flex cursor-pointer flex-col gap-2">
          <img
            className="block aspect-square w-55 overflow-hidden rounded-2xl object-cover"
            src="https://i.ibb.co/ZR5HRMF5/30eba8d8a30e11eeb89eda31b0f942fa-upscaled.jpg"
            alt=""
          />
          <p className="text-xl">Ultimate Calm</p>
        </div>

        <div className="flex cursor-pointer flex-col gap-2">
          <img
            className="block aspect-square w-55 overflow-hidden rounded-2xl object-cover"
            src="https://i.ibb.co/HTh8sfgz/a70e21d680b311eebb893a7ca4cc1bdc-upscaled.jpg"
            alt=""
          />
          <p className="text-xl">Electronic Dance</p>
        </div>
      </section>
    </>
  );
};

export default Trandings;
