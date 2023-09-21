/** @jsxImportSource @emotion/react */
"use client";
import IndexPageCarousel from "@/components/page/index/IndexCarousel";
import IndexTargetCharity from "@/components/page/index/IndexTargetCharity";
import { css } from "@emotion/react";

export default function HomePage() {
  return (
    <>
      <section css={styles.section}>
        <IndexPageCarousel />
        <IndexTargetCharity />
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
    gap: "1.5rem",
    padding: "0 1rem",
  }),
};
