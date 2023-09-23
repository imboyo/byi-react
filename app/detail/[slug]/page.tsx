/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import DetailImageHero from "@/components/page/detail/DetailImageHero";
import DetailPayment from "@/components/page/detail/DetailPayment";
import DetailCampaignDetail from "@/components/page/detail/DetailCampaignDetail";
import DetailSharingAction from "@/components/page/detail/DetailSharingAction";

interface PropsType {
  params: {
    slug: string;
  };
}

export default function DetailPage({ params }: PropsType) {
  console.log(params.slug);

  return (
    <section css={styles.sectionContainer}>
      <DetailImageHero image="/activities/program_zakat_emas.jpeg" />

      <section css={styles.sectionContent}>
        <DetailPayment />
        <DetailCampaignDetail />
        <DetailSharingAction />
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
    gap: 2rem;
    
    width: 100%;
    padding: 0 2rem 3rem 2rem;
  `,
};
