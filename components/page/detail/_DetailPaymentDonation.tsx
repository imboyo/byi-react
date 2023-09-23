/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import _DetailPaymentDonationHeading from "@/components/page/detail/_DetailPaymentDonationHeading";
import _DetailPaymentDonationForm from "@/components/page/detail/_DetailPaymentDonationForm";

const _DetailPaymentDonation = () => {
  const onSubmit = (data: { nominal: number }) => {
    console.log(data);
  };

  return (
    <div css={styles.container}>
      <_DetailPaymentDonationHeading />
      <_DetailPaymentDonationForm onSubmit={(data) => onSubmit(data)} />
    </div>
  );
};
export default _DetailPaymentDonation;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `,
};
