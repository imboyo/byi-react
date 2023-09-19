/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IndexPageCarouselNavButton from "@/components/page/index/IndexPageCarouselNavButton";
import NavigatePrevIcon from "@mui/icons-material/NavigateBefore";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    if (activeStep === images.length - 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) return;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        maxWidth: 550,
        flexGrow: 1,
        display: "flex",
        flexDirection: "flex-row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderRadius: "1rem",
      }}
    >
      <IndexPageCarouselNavButton
        onClick={handleBack}
        sx={{
          left: 10,
        }}
        disabled={activeStep === 0}
      >
        <NavigatePrevIcon />
      </IndexPageCarouselNavButton>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 185,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      <IndexPageCarouselNavButton
        onClick={handleNext}
        sx={{
          right: 10,
        }}
        disabled={activeStep === images.length - 1}
      >
        <NavigateNextIcon />
      </IndexPageCarouselNavButton>
    </Box>
  );
}
