/** @jsxImportSource @emotion/react */
"use client";
import React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { css } from "@emotion/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body css={styles.body}>
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
    backgroundColor: "#f3f3f3",
    width: "100%",
  }),

  main: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "600px",
    width: "100%",
    padding: "2rem 1rem",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFF",
  }),
};
