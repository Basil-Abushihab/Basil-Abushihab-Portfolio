import { TimelineNode } from "@/main-page/sections/my-journey/components/timeline/TimelineNode";
import { TimelineSVG } from "@/main-page/sections/my-journey/components/timeline/TimelineSVGLine";

type TimelineProps = {
  nodeSrc: string;
  nodeLabel: string;
}

export const Timeline = (props:TimelineProps) => {
  const { nodeSrc, nodeLabel } = props;
  return (
    <>
      <div className="flex items-center flex-col">
        <TimelineNode imgSrc={nodeSrc} label={nodeLabel}/>
        <TimelineSVG/>
      </div>
    </>
  );
};
