/** @jsxImportSource @emotion/react */
"use client";
import IndexPageCarousel from "@/components/page/index/IndexCarousel";
import IndexTargetCharity from "@/components/page/index/IndexTargetCharity";
import { css } from "@emotion/react";
import IndexChoosenActivites from "@/components/page/index/IndexChoosenActivites";

export default function HomePage() {
  return (
    <>
      <section css={styles.section}>
        <IndexPageCarousel />
        <IndexTargetCharity />
        <IndexChoosenActivites />
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
    width: "100%",
    gap: "3rem",
    padding: "0 1rem",
  }),
};
