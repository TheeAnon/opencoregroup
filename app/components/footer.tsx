import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full bg-[#294F74] p-8 pb-16">
      <div className="bg-white flex flex-col gap-6 p-6 rounded-3xl relative">
        <div className="w-full flex flex-col gap-8 mb-20 md:mb-64">
          <div className="w-full flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-8">
              <div className="md:items-start">
                <h3 className="w-full text-[#475467] text-center md:text-start font-semibold text-2xl">
                  Say Hello!
                </h3>
                <a
                  href="mailto:opencoregroup@gmail.com"
                  className="flex gap-2 text-sm md:text-base py-2 px-4 md:border-none md:p-0 border border-[#EAECF0] text-[#667085] rounded"
                >
                  opencoregroup@gmail.com
                  <Image
                    src="/export-icon.svg"
                    alt="Export icon"
                    width={24}
                    height={24}
                    className="md:hidden"
                  />
                </a>
              </div>
              <div className="flex gap-4 md:justify-start justify-evenly">
                <a className="rounded border border-[#EDF2F5] bg-[#EDF2F5] p-1">
                  <Image
                    src="/ig-icon.svg"
                    alt="IG icon"
                    width={24}
                    height={24}
                  />
                </a>
                <a className="rounded border border-[#EDF2F5] bg-[#EDF2F5] p-1">
                  <Image
                    src="/linkedin-icon.svg"
                    alt="linkedin icon"
                    width={24}
                    height={24}
                  />
                </a>
                <a className="rounded border border-[#EDF2F5] bg-[#EDF2F5] p-1">
                  <Image
                    src="/x-icon.svg"
                    alt="x icon"
                    width={24}
                    height={24}
                  />
                </a>
                <a className="rounded border border-[#EDF2F5] bg-[#EDF2F5] p-1">
                  <Image
                    src="/fb-icon.svg"
                    alt="fb icon"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
            <div className="w-full border-t md:border-none border-[#F2F4F7] pt-4 flex gap-16 justify-between md:justify-end">
              <div className="flex flex-col gap-3">
                <a href="/" className="text-[#475467] font-normal text-base">
                  Home
                </a>
                <a
                  href="/about"
                  className="text-[#475467] font-normal text-base"
                >
                  About
                </a>
                <a
                  href="/work"
                  className="text-[#475467] font-normal text-base"
                >
                  Work
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="/services"
                  className="text-[#475467] font-normal text-base"
                >
                  Services
                </a>
                <a
                  href="/contact-us"
                  className="text-[#475467] font-normal text-base"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="w-full border-t md:border-none border-[#F2F4F7] pt-4 flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#667085] font-normal text-sm">
              Toronto, ON Canada
            </p>
            <p className="text-[#667085] font-normal text-sm">
              OpenCore. All Rights Reserved
            </p>
          </div>
        </div>
        <Image
          src="/opencore-footer.svg"
          alt="Opencore logo"
          width={1000}
          height={1000}
          className="w-full self-center -bottom-3 sm:-bottom-5 md:-bottom-11 lg:-bottom-16 absolute"
        />
      </div>
    </div>
  );
};
