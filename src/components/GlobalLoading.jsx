import React, { useEffect, useState } from "react";
import { Box, Paper, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

const GlobalLoading = () => {
  const theme = useTheme();
  const isShowGlobalLoading = useSelector(
    (state) => state.global.isShowGlobalLoading
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isShowGlobalLoading && !isLoading) {
      setIsLoading(true);
    } else if (!isShowGlobalLoading && isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading, isShowGlobalLoading]);

  if (!isLoading) return <></>;

  return (
    <Paper
      sx={{
        opacity: 0.9,
        transitions: "all 0.3s ease",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "60px",
          height: "60px",
          marginLeft: "-30px",
          marginTop: "-30px",

          "& div": {
            content: "''",
            position: "absolute",
            width: "16px",
            height: "16px",
            background: theme.palette.secondary[500],
            top: "10px",
            left: "10px",
            transformOrigin: "20px 20px",
            borderRadius: "8px",
            animation: "spin-a 2s infinite cubic-bezier(0.5, 0, 0.5, 1)",
          },

          "& div:nth-of-type(2)": {
            top: "10px",
            left: "auto",
            right: "10px",
            transformOrigin: "-4px 20px",
            animation: "spin-b 2s infinite cubic-bezier(0.5, 0, 0.5, 1)",
          },

          "& div:nth-of-type(3)": {
            top: "auto",
            left: "auto",
            right: "10px",
            bottom: "10px",
            transformOrigin: "-4px -4px",
            animation: "spin-c 2s infinite cubic-bezier(0.5, 0, 0.5, 1)",
          },

          "& div:nth-of-type(4)": {
            top: "auto",
            bottom: "10px",
            transformOrigin: "20px -4px",
            animation: "spin-d 2s infinite cubic-bezier(0.5, 0, 0.5, 1)",
          },

          "@keyframes spin-a": {
            "0%": { transform: "rotate(90deg)" },
            "0%": { transform: "rotate(90deg)" },
            "50%": { transform: "rotate(180deg)" },
            "75%": { transform: "rotate(270deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          " @keyframes spin-b": {
            "0%": { transform: "rotate(90deg)" },
            "25%": { transform: "rotate(90deg)" },
            "25%": { transform: "rotate(180deg)" },
            "75%": { transform: "rotate(270deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          "@keyframes spin-c": {
            "0%": { transform: "rotate(90deg)" },
            "25%": { transform: "rotate(90deg)" },
            "50%": { transform: "rotate(180deg)" },
            "50%": { transform: "rotate(270deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          "@keyframes spin-d": {
            "0%": { transform: "rotate(90deg)" },
            " 25%": { transform: "rotate(90deg)" },
            "50%": { transform: "rotate(180deg)" },
            "75%": { transform: "rotate(270deg)" },
            "75%": { transform: "rotate(360deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
      </Box>
    </Paper>
  );
};

export default GlobalLoading;
