/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CharityActivityCardItem from "@/components/domain/charity-activity/CharityActivityCardItem";

const IndexChoosenActivites = () => {
  return (
    <section
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
      })}
    >
      <h3>Program Pilihan</h3>

      <div>
        <CharityActivityCardItem
          title="Zakat Fidyah"
          collected={3000000}
          target={6000000}
          image="/activites/program_wakaf_lahan.jpeg"
          link="/detail/slug"
        />
      </div>
    </section>
  );
};
export default IndexChoosenActivites;

// Region: Styles
