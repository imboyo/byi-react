/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Button, useTheme} from "@mui/material";

const _IndexCharityInvitationHeading = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      `}
    >
      <h4
        css={css`
          color: white;
          font-weight: normal;
        `}
      >
        SIAP BERWAKAF?
      </h4>
      <Button
        variant={"contained"}
        size="large"
        css={css`
          background-color: white;
          color: ${theme.palette.primaryRed.main};
          font-weight: normal;
        `}
      >
        Wakaf Sekarang
      </Button>
    </div>
  );
};
export default _IndexCharityInvitationHeading;