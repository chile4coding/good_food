"use client";

import { createTheme, Input } from "@mantine/core";

export const theme = createTheme({
  colors: {
    blue: [
      "#EEF0FF",
      "#DDE1FF",
      "#B8BFFF",
      "#8F9AFF",
      "#6B7AFF",
      "#5063F0",
      "#4855E8",
      "#3D45CF",
      "#353CB8",
      "#2D33A1",
    ],

    orange: [
      "#FFF4E6",
      "#FFE8CC",
      "#FFD8A8",
      "#FFC078",
      "#FFA94D",
      "#FF922B",
      "#FD7E14",
      "#F76707",
      "#E8590C",
      "#D9480F",
    ],

    cyan: [
      "#E3FAFC",
      "#C5F6FA",
      "#99E9F2",
      "#66D9E8",
      "#3BC9DB",
      "#22B8CF",
      "#15AABF",
      "#1098AD",
      "#0C8599",
      "#0B7285",
    ],

    green: [
      "#E6FCF5",
      "#C3FAE8",
      "#96F2D7",
      "#63E6BE",
      "#38D9A9",
      "#20C997",
      "#12B886",
      "#0CA678",
      "#099268",
      "#087F5B",
    ],

    red: [
      "#FFE8E8",
      "#FFD1D1",
      "#FFB3B3",
      "#FF8A8A",
      "#FF6B6B",
      "#FF5252",
      "#FA5252",
      "#F03E3E",
      "#E03131",
      "#C92A2A",
    ],

    violet: [
      "#F3F0FF",
      "#E5DBFF",
      "#D0BFFF",
      "#B197FC",
      "#9775FA",
      "#845EF7",
      "#7950F2",
      "#7048E8",
      "#6741D9",
      "#5F3DC4",
    ],

    gray: [
      "#F8F9FA",
      "#F1F3F5",
      "#E9ECEF",
      "#DEE2E6",
      "#CED4DA",
      "#ADB5BD",
      "#868E96",
      "#495057",
      "#343A40",
      "#212529",
    ],
  },

  primaryColor: "blue",
  primaryShade: { light: 5, dark: 6 },

  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",

  headings: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "600",
    sizes: {
      h1: { fontSize: "32px", lineHeight: "1.3" },
      h2: { fontSize: "24px", lineHeight: "1.35" },
      h3: { fontSize: "20px", lineHeight: "1.4" },
      h4: { fontSize: "18px", lineHeight: "1.45" },
      h5: { fontSize: "16px", lineHeight: "1.5" },
      h6: { fontSize: "14px", lineHeight: "1.5" },
    },
  },

  fontSizes: {
    xs: "11px",
    sm: "13px",
    md: "14px",
    lg: "16px",
    xl: "18px",
  },

  radius: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
  },

  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  components: {
    Card: {
      defaultProps: {
        p: "lg",
        radius: "md",
        withBorder: true,
      },
      styles: {
        root: {
          borderColor: "#F1F3F5",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)",
        },
      },
    },

    Button: {
      defaultProps: {
        radius: "md",
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },

    Input: {
      styles: {
        input: {
          backgroundColor: "#f6f6fb",
          borderColor: "#E9ECEF",
          "&:focus": {
            borderColor: "#5063F0",
          },
        },
      },
    },

    Select: {
      defaultProps: {
        radius: "md",
      },
    },

    Text: {
      defaultProps: {
        c: "#495057",
      },
    },

    NavLink: {
      styles: {
        root: {
          borderRadius: "8px",
          "&[data-active]": {
            backgroundColor: "#F3F0FF",
            color: "#7048E8",
          },
        },
      },
    },
  },

  other: {
    chartColors: {
      primary: "#5063F0",
      secondary: "#B8BFFF",
      orange: "#FD7E14",
      cyan: "#22B8CF",
      violet: "#9775FA",
    },

    textColors: {
      primary: "#212529",
      secondary: "#868E96",
      muted: "#ADB5BD",
    },

    statusColors: {
      positive: "#20C997",
      negative: "#FF5252",
    },
  },
});
