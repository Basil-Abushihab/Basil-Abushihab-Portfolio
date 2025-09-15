import clsx from "clsx";
import lodash from "lodash";

type VideoDemoSectionProps = {
  videoUrl?: string;
  sectionTitle: string;
};
export const VideoDemoSection = (props: VideoDemoSectionProps) => {
  const { sectionTitle, videoUrl } = props;
  return (
    <div className={clsx("felx flex-col gap-4",{"hidden":lodash.isUndefined(videoUrl)})}>
      <h3 className="text-lg font-bold mb-2">{sectionTitle}</h3>
       <div className="relative w-full overflow-hidden rounded-lg shadow-md">
          <video
            src={videoUrl??""}
            controls
            className="w-full h-[500px] rounded-lg"
          />
          </div>
    </div>
  );
};
