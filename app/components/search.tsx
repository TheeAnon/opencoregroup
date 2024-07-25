"use client";
import Image from "next/image";
import { useState } from "react";

export const Search = () => {
  const [resource, setResource] = useState("all");

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative flex w-full items-center">
        <button className="absolute top-auto bottom-auto p-2 left-2">
          <Image
            src="/search-icon.svg"
            alt="Search icon"
            width={16}
            height={16}
          />
        </button>
        <input
          placeholder="Search for resources and tutorials"
          className="placeholder-[#98A2B3] rounded-lg border-2 text-sm lg:text-base border-[#EAECF0] flex grow pl-12 py-3 px-4"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <button
            onClick={() => setResource("all")}
            className="flex items-center gap-2 text-sm font-medium whitespace-nowrap rounded-lg px-4 py-2"
            style={{
              color: resource === "all" ? "#294F74" : "#667085",
              backgroundColor: resource === "all" ? "#EDF2F5" : "",
              border: resource === "all" ? "" : "1px solid #EAECF0",
            }}
          >
            All Resources
            <Image
              src="/arrow-down.svg"
              alt="arrow down icon"
              width={16}
              height={16}
              className="lg:hidden"
            />
          </button>
          <div className="lg:flex hidden gap-4">
            <button
              onClick={() => setResource("design")}
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap rounded-lg px-4 py-2"
              style={{
                color: resource === "design" ? "#294F74" : "#667085",
                backgroundColor: resource === "design" ? "#EDF2F5" : "",
                border: resource === "design" ? "" : "1px solid #EAECF0",
              }}
            >
              Design
            </button>
            <button
              onClick={() => setResource("development")}
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap rounded-lg px-4 py-2"
              style={{
                color: resource === "development" ? "#294F74" : "#667085",
                backgroundColor: resource === "development" ? "#EDF2F5" : "",
                border: resource === "development" ? "" : "1px solid #EAECF0",
              }}
            >
              Developement
            </button>
            <button
              onClick={() => setResource("marketing")}
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap rounded-lg px-4 py-2 border"
              style={{
                color: resource === "marketing" ? "#294F74" : "#667085",
                backgroundColor: resource === "marketing" ? "#EDF2F5" : "",
                border: resource === "marketing" ? "" : "1px solid #EAECF0",
              }}
            >
              Marketing
            </button>
            <button
              onClick={() => setResource("branding")}
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap rounded-lg px-4 py-2 border"
              style={{
                color: resource === "branding" ? "#294F74" : "#667085",
                backgroundColor: resource === "branding" ? "#EDF2F5" : "",
                border: resource === "branding" ? "" : "1px solid #EAECF0",
              }}
            >
              Branding
            </button>
          </div>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium whitespace-nowrap rounded-lg px-4 py-2 border">
          <Image
            src="/filter-funnel.svg"
            alt="filter-funnel icon"
            width={24}
            height={24}
          />
          Filters
        </button>
      </div>
    </div>
  );
};
