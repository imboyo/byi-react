/** @jsxImportSource @emotion/react */
import { Button, Card, LinearProgress, useTheme } from "@mui/material";
import { css } from "@emotion/react";
import { grey, red } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { numToCurrencyFormat } from "@/utils/numToCurrencyFormat";
import theme from "@/components/ThemeRegistry/theme";

interface PropsType {
  title: string;
  target: number;
  collected: number;
  image: string;
  link: string;
}

const CharityActivityCardItem = (props: PropsType) => {
  return (
    <Card css={styles.cardWrapper}>
      {/* Image cover */}
      <div css={styles.image.wrapper}>
        <Image
          src="/activites/program_wakaf_lahan.jpeg"
          alt="activities"
          width={250}
          height={250}
          css={styles.image.img}
        />
      </div>

      {/* Content */}
      <div css={styles.content.wrapper}>
        <h4 css={styles.content.title}>{props.title}</h4>

        <div css={styles.content.subContainer.wrapper}>
          <p css={styles.content.subContainer.collected}>
            Terkumpul Rp. {numToCurrencyFormat(props.collected)}
          </p>

          <LinearProgress value={50} variant="determinate" color="error" />

          <p css={styles.content.subContainer.target}>
            Target Rp. {numToCurrencyFormat(props.target)}
          </p>

          <Link href={props.link}>
            <Button
              variant="contained"
              fullWidth
              css={styles.content.subContainer.linkButton}
            >
              Donasi Sekarang
            </Button>
          </Link>

          <p css={styles.content.subContainer.taxText}>
            Termasuk 10% Infak Operasional
          </p>
        </div>
      </div>
    </Card>
  );
};
export default CharityActivityCardItem;

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

  // Section
  image: {
    wrapper: css({
      width: "100%",
      height: "250px",
    }),
    img: css({
      objectFit: "cover",
    }),
  },

  // Section
  content: {
    wrapper: css({
      padding: "0.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    }),

    title: css({
      color: grey[900],
      fontWeight: "bold",
      textAlign: "center",
    }),

    // Section
    subContainer: {
      wrapper: css({
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }),

      collected: css({
        fontSize: "0.75rem",
        color: grey[700],
      }),

      target: css({
        fontSize: "0.75rem",
        color: grey[700],
        textAlign: "right",
      }),

      linkButton: css({
        backgroundColor: theme.palette.primaryRed.main,

        "&:hover": {
          backgroundColor: red[900],
        },
      }),

      taxText: css({
        fontSize: "0.75rem",
        color: grey[700],
      }),
    },
  },
};
