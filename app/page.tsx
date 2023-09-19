/** @jsxImportSource @emotion/react */
"use client";
import IndexPageCarousel from "@/components/page/index/IndexPageCarousel";
import { css } from "@emotion/react";

export default function HomePage() {
  return (
    <>
      <section css={styles.section}>
        <IndexPageCarousel />
      </section>
    </>
  );
}

const styles = {
  section: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "600px",
    width: "100%",
  }),
};
