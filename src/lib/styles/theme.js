export const colors = {
  white: "#FFFFFF",
  dirtyWhite: "#F6F9FC",
  gray: "#525F7F",
  lightGray: "#7B7B93",
  paperGray: "#F6F7FA",
  hoverGray: "#D6D6D6",
  black: "#000000",
};

export const commonThemeStyling = {};

export const theme = {
  ...commonThemeStyling,
  ...colors,
  background: colors.white,
  color: colors.black,
  fontFamily: "Sora",
  buttons: {
    primary: {
      color: colors.black,
      background: colors.white,
      border: `3px solid ${colors.black}`,
    },
  },
  typograhpy: {
    h1: {
      "font-size": "56px",
      "font-weight": 600,
      "line-height": "67.2px",
      color: colors.black,
      margin: "0px",
    },
    h2: {
      "font-size": "40px",
      "font-weight": 700,
      "line-height": "38.4px",
      color: colors.black,
      margin: "0px",
    },
    h3: {
      "font-size": "32px",
      "font-weight": 700,
      "line-height": "44.8px",
      color: colors.black,
      margin: "0px",
    },
    h5: {
      "font-size": "18px",
      "font-weight": 700,
      "line-height": "21.6px",
      color: colors.black,
      margin: "0px",
    },
    label: {
      "font-size": "15px",
      "font-weight": 400,
      "line-height": "18px",
    },
    text: {
      "font-size": "15px",
      "font-weight": 400,
      "line-height": "21px",
    },
  },
};
