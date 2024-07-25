import Image from "next/image";

interface ResourceProps {
  resource: {
    image: string;
    title: string;
    tags?: string[];
    label?: string;
    label_image?: string;
  };
}

export const Resource: React.FC<ResourceProps> = ({ resource }) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={resource.image}
        alt={resource.title}
        width={1000}
        height={1000}
        className="w-full h-60 aspect-square rounded-lg"
      />
      <h3 className="w-full font-medium text-xl text-[#344054] lg:text-2xl">
        {resource.title}
      </h3>
      {resource.tags && (
        <div className="flex gap-2">
          {resource.tags.map((tag, index) => (
            <button
              key={index}
              className="px-3 p-1 rounded-full bg-[#FCFCFD] text-[#667085] text-sm font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      {resource.label && (
        <div className="flex gap-2">
          <a className="flex gap rounded-sm px-2 py-1 gap-1 lg:bg-[#F9FAFB] text-[#667085] font-medium text-sm">
            <Image
              src={resource.label_image}
              alt="Link icon"
              width={16}
              height={16}
            />
            {resource.label}
          </a>
        </div>
      )}
    </div>
  );
};
