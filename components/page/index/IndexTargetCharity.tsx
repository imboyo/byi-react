/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Button, Card, Divider, Theme, useTheme} from "@mui/material";
import IndexTargetCharityItem from "@/components/page/index/IndexTargetCharityItem";
import theme from "@/components/ThemeRegistry/theme";
import Link from "next/link";

const IndexTargetCharity = () => {
  const theme = useTheme();

  return (
    <section css={styles.section}>
      <Button
        variant="contained"
        color="error"
        fullWidth
        css={css({
          textTransform: "none",
          backgroundColor: "#aa1919",
        })}
      >
        Daftar Pejuang Yatim
      </Button>

      <div css={styles.inquiry.wrapper}>
        <h3 css={styles.inquiry.moneyText(theme)}>Rp. 150.000.000</h3>
        <p css={styles.inquiry.descriptionText}>
          Jumlah Perolehan Dalam Rupiah
        </p>
      </div>

      <Card css={styles.card.wrapper}>
        <Link href="#wakaf">
          <IndexTargetCharityItem label="Wakaf" image="/images/generous.png" />
        </Link>{" "}
        <Link href="#zakat">
          <IndexTargetCharityItem label="Wakaf" image="/images/generous.png" />
        </Link>{" "}
        <Link href="#qurban">
          <IndexTargetCharityItem label="Wakaf" image="/images/generous.png" />
        </Link>{" "}
      </Card>
    </section>
  );
};

// Region: Styles
const styles = {
  section: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
  }),

  inquiry: {
    wrapper: css({
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      textAlign: "center",
    }),

    moneyText: (theme: Theme) =>
      css({
        color: theme.palette.error.main,
        fontSize: "2rem",
        fontWeight: "bold",
        margin: 0,
      }),
    descriptionText: css({
      margin: 0,
    }),
  },

  card: {
    wrapper: css({
      width: "100%",
      padding: "1rem 1rem",
      display: "grid",

      // Grid with 2 Columns and the rows is auto following total items
      gridTemplateColumns: "repeat(3, 1fr)",
      gridAutoRows: "auto",

      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",

      [theme.breakpoints.up("sm")]: {
        padding: "1rem 4rem",
      },
    }),
  },
};
export default IndexTargetCharity;
