/** @jsxImportSource @emotion/react */
import { Card } from "@mui/material";
import { css } from "@emotion/react";
import _ActivityCardImage from "@/components/domain/activity/_ActivityCardImage";
import _ActivityCardContent from "@/components/domain/activity/_ActivityCardContent";
import { ComponentDomainActivityCardType } from "@/types/components/domain/activity";

const _ActivityCardVertical = (props: ComponentDomainActivityCardType) => {
  return (
    <Card css={styles.cardWrapper}>
      <_ActivityCardImage image={props.image} />
      <_ActivityCardContent
        title={props.title}
        target={props.target}
        collected={props.collected}
        link={props.link}
      />
    </Card>
  );
};
export default _ActivityCardVertical;

// Region: Styles
const styles = {
  cardWrapper: css`
    width: 240px;
    height: 450px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    border: 1px solid #777777;
  `,
};
