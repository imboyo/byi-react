/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css } from "@emotion/react";

interface PropsType {
  image: string;
}

const CharityActivityCardImage = (props: PropsType) => {
  return (
    <div css={styles.wrapper}>
      <Image
        src={props.image}
        alt="activities"
        width={250}
        height={250}
        css={styles.img}
      />
    </div>
  );
};
export default CharityActivityCardImage;

// Region: Styles
const styles = {
  wrapper: css({
    width: "100%",
    height: "250px",
  }),

  img: css({
    objectFit: "cover",
    borderRadius: "1rem",
  }),
};
