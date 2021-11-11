import { createStitches } from "@stitches/react";
import {
  gray,
  grayDark,
  mauve,
  mauveDark,
  slate,
  slateDark,
  sage,
  sageDark,
  olive,
  oliveDark,
  sand,
  sandDark,
  tomato,
  tomatoDark,
  red,
  redDark,
  crimson,
  crimsonDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  purple,
  purpleDark,
  violet,
  violetDark,
  indigo,
  indigoDark,
  blue,
  blueDark,
  cyan,
  cyanDark,
  teal,
  tealDark,
  green,
  greenDark,
  grass,
  grassDark,
  brown,
  brownDark,
  orange,
  orangeDark,
  sky,
  skyDark,
  mint,
  mintDark,
  lime,
  limeDark,
  yellow,
  yellowDark,
  amber,
  amberDark,
  gold,
  goldDark,
  bronze,
  bronzeDark,
  whiteA,
  whiteADark,
  blackA,
  blackADark,
} from "@radix-ui/colors";

const stitches = createStitches({
  theme: {
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...brown,
      ...orange,
      ...sky,
      ...mint,
      ...lime,
      ...yellow,
      ...amber,
      ...gold,
      ...bronze,
      ...whiteA,
      ...blackA,
      secondary: "$violet7",
      muted: "#f6f6f6",

      // Semantic colors
      hiContrast: "$slate12",
      loContrast: "$slate1",
      canvas: "hsl(0 0% 93%)",
      panel: "white",
      transparentPanel: "hsl(0 0% 0% / 97%)",
      shadowLight: "hsl(206 22% 7% / 35%)",
      shadowDark: "hsl(206 22% 7% / 20%)",
    },
    fonts: {
      body: "Untitled Sans, -apple-system, system-ui, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontSizes: {
      0: 0,
      1: "12px",
      2: "15px",
      3: "18px",
      4: "21px",
      5: "25px",
      6: "30px",
      7: "36px",
      8: "43px",
      9: "52px",
      10: "62px",
    },
    fontWeights: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      6: "600",
      7: "700",
      8: "800",
      9: "900",
      10: "$9",
      normal: "$4",
      bold: "$7",
      extraBold: "$9",
    },
    lineHeights: {
      0: 0,
      1: "12px",
      2: "15px",
      3: "18px",
      4: "21px",
      5: "25px",
      6: "30px",
      7: "36px",
      8: "43px",
      9: "52px",
      10: "62px",
    },
    shadows: {
      1: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
      2: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
      3: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
      4: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
    },
    space: {
      0: 0,
      1: "0.3rem",
      2: "0.5rem",
      3: "0.8rem",
      4: "1rem",
      5: "1.1rem",
      6: "1.4rem",
      7: "1.8rem",
      8: "2rem",
      9: "3rem",
      10: "4rem",
      11: "5rem",
      12: "7rem",
    },
    sizes: {
      0: 0,
      1: "480px",
      2: "768px",
      3: "1024px",
      4: " 1200px",
      5: "1600px",
    },

    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "0.8rem",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      0: 0,
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    // adds 500 to each breakpoint to makeup for the side bar width
    bp1_plus: "(min-width: 1020px)",
    bp2_plus: "(min-width: 1400px)",
    bp3_plus: "(min-width: 1700px)",
    bp4_plus: "(min-width: 2300px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value) => ({ textAlign: value }),

    fd: (value) => ({ flexDirection: value }),
    fw: (value) => ({ flexWrap: value }),

    ai: (value) => ({ alignItems: value }),
    ac: (value) => ({ alignContent: value }),
    jc: (value) => ({ justifyContent: value }),
    as: (value) => ({ alignSelf: value }),
    fg: (value) => ({ flexGrow: value }),
    fs: (value) => ({ fontSize: value }),
    fb: (value) => ({ flexBasis: value }),

    bg: (value) => ({
      backgroundColor: value,
    }),

    br: (value) => ({
      borderRadius: value,
    }),
    btrr: (value) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value) => ({ boxShadow: value }),

    lh: (value) => ({ lineHeight: value }),

    ox: (value) => ({ overflowX: value }),
    oy: (value) => ({ overflowY: value }),

    pe: (value) => ({ pointerEvents: value }),
    us: (value) => ({ WebkitUserSelect: value, userSelect: value }),

    size: (value) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(to bottom right,${value}, rgba(37,99,235,0))`,
    }),

    appearance: (value) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (value) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export const breakpoints = {
  default: (rule) => rule,
  bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
  bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
  bp3: (rule) => `@media (min-width: 1200px) { ${rule} }`,
  bp4: (rule) => `@media (min-width: 1800px) { ${rule} }`,
  motion: (rule) => `@media (prefers-reduced-motion) { ${rule} }`,
  hover: (rule) => `@media (hover: hover) { ${rule} }`,
  dark: (rule) => `@media (prefers-color-scheme: dark) { ${rule} }`,
  light: (rule) => `@media (prefers-color-scheme: light) { ${rule} }`,
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  getCssText,
  createTheme,
  config,
} = stitches;

export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...brownDark,
    ...orangeDark,
    ...skyDark,
    ...mintDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...goldDark,
    ...bronzeDark,
    ...whiteADark,
    ...blackADark,
    // Semantic colors
    hiContrast: "$slate12",
    loContrast: "$slate1",
    canvas: "hsl(0 0% 15%)",
    panel: "$slate3",
    transparentPanel: "hsl(0 100% 100% / 97%)",
    shadowLight: "hsl(206 22% 7% / 35%)",
    shadowDark: "hsl(206 22% 7% / 20%)",
  },
});
