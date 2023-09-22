import { ComponentDomainActivityCardType } from "@/types/components/domain/activity";
import _ActivityCardVertical from "@/components/domain/activity/_ActivityCardVertical";
import _ActivityCardHorizontal from "@/components/domain/activity/_ActivityCardHorizontal";

interface PropsType extends ComponentDomainActivityCardType {
  mode: "vertical" | "horizontal";
}

const ActivityCard = (props: PropsType) => (
  <>
    {props.mode === "vertical" ? (
      <_ActivityCardVertical
        title={props.title}
        collected={props.collected}
        target={props.target}
        image={props.image}
        link={props.link}
      />
    ) : (
      <_ActivityCardHorizontal
        title={props.title}
        collected={props.collected}
        target={props.target}
        image={props.image}
        link={props.link}
      />
    )}
  </>
);
export default ActivityCard;
