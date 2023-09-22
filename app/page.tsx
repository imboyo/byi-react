/** @jsxImportSource @emotion/react */
"use client";
import IndexPageCarousel from "@/components/page/index/IndexCarousel";
import IndexTargetCharity from "@/components/page/index/IndexTargetCharity";
import { css } from "@emotion/react";
import IndexChoosenActivites from "@/components/page/index/IndexChoosenActivites";
import IndexCategoryListByCategory from "@/components/page/index/IndexCategoryListByCategory";
import IndexCharityInvitation from "@/components/page/index/IndexCharityInvitation";

export default function HomePage() {
  return (
    <>
      <section css={styles.mainSection}>
        <IndexPageCarousel />
        <IndexTargetCharity />
        <IndexChoosenActivites />
        <IndexCategoryListByCategory />
      </section>

      <section css={styles.footerSection}>
        <IndexCharityInvitation />
      </section>
    </>
  );
}

const styles = {
  mainSection: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3rem;
    padding: 0 1rem;
  `,

  footerSection: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `
};
