/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import _DetailPaymentHeading from "@/components/page/detail/_DetailPaymentHeading";
import _DetailPaymentDonation from "@/components/page/detail/_DetailPaymentDonation";

const DetailPayment = () => {
  return (
    <section css={styles.container}>
      <_DetailPaymentHeading collected={1000000} target={3000000} />
      <_DetailPaymentDonation />
    </section>
  );
};
export default DetailPayment;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    width: 100%;

    // border only left, right, and bottom
    border: 1px solid #e0e0e0;
    border-top: none;
  `,
};
