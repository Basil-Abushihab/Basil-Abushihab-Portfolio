type PopoverArticleSectionProps = {
  nodeLogo: string;
  title: string;
  description: string[];
};

export const PopoverArticleSection = (props: PopoverArticleSectionProps) => {
  const { description, nodeLogo, title } = props;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-end gap-4">
        <img src={nodeLogo} className="w-[50px] h-[50px]" alt={title} />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
      </div>

      {description.map((desc, index) => (
        <p key={index} className="mb-2">
          {desc}
        </p>
      ))}
    </div>
  );
};
