/** @jsxImportSource @emotion/react */

import Image from "next/image";
import { css } from "@emotion/react";
import theme from "@/components/ThemeRegistry/theme";

interface PropsType {
  label: string;
  image: string;
}

const IndexTargetCharityItem = (props: PropsType) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.image.wrapper}>
        <Image
          src={props.image}
          alt="charity"
          width={28}
          height={28}
          css={styles.image.image}
        />
      </div>
      <p css={styles.label}>{props.label}</p>
    </div>
  );
};
export default IndexTargetCharityItem;

// Region: Styles
const styles = {
  wrapper: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
  }),

  image: {
    wrapper: css({
      position: "relative",
      backgroundColor: theme.palette.primaryRed.main,
      padding: "1.75rem",
      borderRadius: "50%",
    }),

    image: css({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#FFFFFF",
      filter: "invert(1)",
    }),
  },

  label: css({
    margin: 0,
    color: theme.palette.grey[800],
  }),
};
