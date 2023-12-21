type Props = {
  title: string;
  content: string;
  items: string[];
  type?: string;
};

export default function RequirementListing({
  title,
  content,
  items,
  type,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
      <p className="text-gray-500">{content}</p>

      <ul className="flex flex-col gap-3 ">
        {items.map((item, index) => {
          return (
            <li key={index} className="flex gap-4 items-center">
              {type === "bullet" ? (
                <span className="block w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"></span>
              ) : (
                <span className="block text-blue-600 font-semibold flex-shrink-0">
                  {index + 1}
                </span>
              )}
              <p className="text-gray-500">{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
