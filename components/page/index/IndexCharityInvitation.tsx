/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Theme, useTheme } from "@mui/material";
import _IndexCharityInvitationHeading from "@/components/page/index/_IndexCharityInvitationHeading";
import Image from "next/image";

const IndexCharityInvitation = () => {
  const theme = useTheme();

  return (
    <section css={styles.container(theme)}>
      <_IndexCharityInvitationHeading />

      {/* QRIS Image */}
      <div css={styles.QRISImage.container}>
        <Image
          src="/images/QRIS.jpg"
          alt="QRIS"
          width={300}
          height={300}
          quality={100}
          css={styles.QRISImage.img}
        />
      </div>
    </section>
  );
};
export default IndexCharityInvitation;

// Region: Styles
const styles = {
  container: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.palette.primaryRed.main};
    padding: 3rem 1rem;
  `,

  QRISImage: {
    container: css`
      position: relative;
      margin-top: 3rem;
    `,
    img: css`
      width: 100%;
      height: auto;
    `,
  },
};
