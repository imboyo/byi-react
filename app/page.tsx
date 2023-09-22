/** @jsxImportSource @emotion/react */
"use client";
import IndexPageCarousel from "@/components/page/index/IndexCarousel";
import IndexTargetCharity from "@/components/page/index/IndexTargetCharity";
import { css } from "@emotion/react";
import IndexChoosenActivites from "@/components/page/index/IndexChoosenActivites";
import IndexCategoryListByCategory from "@/components/page/index/IndexCategoryListByCategory";

export default function HomePage() {
  return (
    <>
      <section css={styles.section}>
        <IndexPageCarousel />
        <IndexTargetCharity />
        <IndexChoosenActivites />
        <IndexCategoryListByCategory />
      </section>
    </>
  );
}

const styles = {
  section: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3rem;
    padding: 0 1rem;
  `,
};
