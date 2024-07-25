import Image from "next/image";

export const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url('/mesh.png')` }}
      className="bg-cover min-h-20 sm:min-h-24 flex items-center justify-center top-0 fixed z-20 w-full backdrop-blur bg-white/60"
    >
      <div className="rounded-full border bg-white border-[#D0D5DD] flex items-center justify-center">
        <a
          href="/"
          className="px-2 sm:px-4 lg:px-6 py-4 sm:py-6 border-r border-[#D0D5DD]"
        >
          <Image
            src="/logo.png"
            width={36}
            height={36}
            alt="Opencore Group logo"
            className="size-4 sm:size-6 lg:size-7"
          />
        </a>
        <button className="px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
          <Image
            src="/basil_menu-solid.png"
            width={41}
            height={36}
            alt="Opencore Group menu icon"
            className="w-5 sm:w-7 h-4 sm:h-6 lg:w-8 lg:h-7"
          />
        </button>
      </div>
    </div>
  );
};
