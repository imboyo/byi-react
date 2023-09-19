/** @jsxImportSource @emotion/react */
"use client"
import React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { css } from "@emotion/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}>
        <ThemeRegistry>
          <main css={styles.main}>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}

const styles = {
  body: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  main: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "600px",
    width: "100%",
    padding: "2rem 1rem",
  }),
};
