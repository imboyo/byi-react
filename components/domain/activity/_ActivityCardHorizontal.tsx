/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import _ActivityCardContent from "@/components/domain/activity/_ActivityCardContent";
import { Card } from "@mui/material";
import { ComponentDomainActivityCardType } from "@/types/components/domain/activity";

const _ActivityCardHorizontal = (props: ComponentDomainActivityCardType) => {
  return (
    <Card css={styles.cardContainer}>
      <div css={styles.image.container}>
        <Image
          src={props.image}
          alt="activities"
          layout={"fill"}
          sizes={"100vw"}
          css={styles.image.img}
        />
      </div>

      <_ActivityCardContent
        title={props.title}
        target={props.target}
        collected={props.collected}
        link={props.link}
        titleAlign="right"
      />
    </Card>
  );
};
export default _ActivityCardHorizontal;

// Region: Styles
const styles = {
  cardContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    padding: 0.5rem 1rem;
  `,

  image: {
    container: css`
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 1rem;
      overflow: hidden;
    `,

    img: css`
      object-fit: cover;
      width: 100%;
    `,
  },
};
