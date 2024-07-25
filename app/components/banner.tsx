import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-[#FCFCFD] p-8 relative overflow-hidden">
      <div className="rounded-3xl bg-gradient-to-t from-[#22405C] to-[#2F5478] flex gap-16 flex-col items-center md:flex-row py-16 px-6 md:justify-around relative z-10">
        <div className="absolute top-0 left-0 w-full h-14">
          <Image
            src="/mesh.png"
            alt="mesh"
            layout="fill"
            objectFit="cover"
            style={{ opacity: 0.1 }}
          />
        </div>
        <div className="max-w-lg flex flex-col gap-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white">
            Transforming your
            <span className="font-semibold"> Ideas into reality</span>
          </h2>
          <h3 className="font-medium text-[#EAECF0] text-base md:text-xl">
            Let&apos;s build something extraordinary together to captivate your
            audience.
          </h3>
        </div>
        <div className="rounded-full border-2 border-[#EDF2F5] size-60 flex items-center justify-center">
          <h3 className="text-[#EDF2F5] font-medium text-2xl">
            Let&apos;s Work
            <br />
            Together!
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-14">
          <Image
            src="/mesh.png"
            alt="mesh"
            layout="fill"
            objectFit="cover"
            style={{ opacity: 0.1, transform: "rotate(180deg)" }}
          />
        </div>
      </div>
    </div>
  );
};
