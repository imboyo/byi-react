/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import _DetailPaymentHeading from "@/components/page/detail/_DetailPaymentHeading";

const DetailPayment = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;

        // border only left, right, and bottom
        border: 1px solid #e0e0e0;
        border-top: none;
      `}
    >
      <_DetailPaymentHeading collected={1000000} target={3000000} />
    </section>
  );
};
export default DetailPayment;
