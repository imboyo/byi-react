import { IconButton, SxProps } from "@mui/material";
import * as React from "react";

interface PropsType {
  onClick: () => void;
  size?: "small" | "medium" | "large";
  sx?: SxProps;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function IndexPageCarouselNavButton({
  onClick,
  size = "medium",
  sx,
  children,
  disabled = false,
}: PropsType) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={{
        ...sx,
        position: "absolute",
        transform: "translateY(-50%)",
        backgroundColor: "#FFFFFF",
        top: "50%",
        zIndex: 1,

        "&:hover": {
          backgroundColor: "#eaeaea",
        },
      }}
    >
      {children}
    </IconButton>
  );
}
