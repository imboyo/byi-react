/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import DetailImageHero from "@/components/page/detail/DetailImageHero";
import theme from "@/components/ThemeRegistry/theme";


interface PropsType {
  params: {
    slug: string;
  };
}

export default function DetailPage({ params }: PropsType) {
  console.log(params.slug)

  return (
    <section css={styles.sectionContainer}>
      <DetailImageHero image="/activities/program_zakat_emas.jpeg" />

      <section css={styles.sectionContent}>

      </section>
    </section>
  );
}

// Region: Styles
const styles = {
  sectionContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  `,

  sectionContent: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
  `,
};
