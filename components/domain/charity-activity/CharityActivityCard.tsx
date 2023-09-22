/** @jsxImportSource @emotion/react */
import { Card } from "@mui/material";
import { css } from "@emotion/react";
import { grey } from "@mui/material/colors";
import CharityActivityCardImage from "@/components/domain/charity-activity/CharityActivityCardImage";
import CharityActivityCardContent from "@/components/domain/charity-activity/CharityActivityCardContent";

interface PropsType {
  title: string;
  target: number;
  collected: number;
  image: string;
  link: string;
}

const CharityActivityCard = (props: PropsType) => {
  return (
    <Card css={styles.cardWrapper}>
      <CharityActivityCardImage image={props.image} />
      <CharityActivityCardContent
        title={props.title}
        target={props.target}
        collected={props.collected}
        link={props.link}
      />
    </Card>
  );
};
export default CharityActivityCard;

// Region: Styles
const styles = {
  cardWrapper: css({
    width: "240px",
    height: "450px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.70)",
    border: `1px solid ${grey[700]}`,
  }),
};
