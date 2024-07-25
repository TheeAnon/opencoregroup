import { Resource } from "./resource";
import { Search } from "./search";

export const Resources = () => {
  const resources = [
    {
      image: "/design-file.png",
      title: "Case Study Template: FlipX, an Investment Attraction Startup",
      label: "Design file",
      label_image: "/link-icon.svg",
    },
    {
      image: "/design-impression.png",
      title: "Designing Impression: The Power of First Impressions",
      label: "Github Resource",
      label_image: "/code-icon.svg",
    },
    {
      image: "/fluid-card.png",
      title: "Fluid Card Animation in After Effects",
      tags: ["Design", "UI UX", "Branding"],
    },
    {
      image: "/design-impression.png",
      title: "Designing Impression: The Power of First Impressions",
      tags: ["Design", "UI UX", "Branding"],
    },
    {
      image: "/flash.png",
      title: "Designing Impression: The Power of First Impressions",
      tags: ["Design"],
    },
    {
      image: "/magnet.png",
      title: "OpenCore Customer Acquisition Strategy",
      label: "Marketing PDF",
      label_image: "/file-icon.svg",
    },
  ];

  return (
    <div className="p-8 flex flex-col w-full gap-8">
      <Search />
      <div className="w-full gap-8 grid grid-cols-1 grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 5xl:grid-cols-6">
        {resources.map((resource, index) => (
          <Resource key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};
