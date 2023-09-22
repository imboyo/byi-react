/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IndexChoosenActivitesCarousel from "@/components/page/index/IndexChoosenActivitesCarousel";

const IndexChoosenActivites = () => {
  return (
    <section
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        width: "100%",
      })}
    >
      <h3>Program Pilihan</h3>

      <IndexChoosenActivitesCarousel />
    </section>
  );
};
export default IndexChoosenActivites;

// Region: Styles