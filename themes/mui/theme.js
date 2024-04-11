import { createTheme } from "@material-ui/core/styles";

const primaryColor = "rgb(144, 238, 144)";
const secondaryColor = "#fff";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  overrides: {
    "& label": {
      color: primaryColor,
    },

    MuiInput: {
      underline: {
        "&::before": {
          borderBottom: `1px solid ${secondaryColor}`,
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "rgba(0, 69, 82, 0.7)",
      },
    },

    MuiInputBase: {
      root: {
        color: "#fff",
      },
    },

    MuiFilledInput: {
      root: {
        backgroundColor: "white",
      },
      underline: {
        "&:after": {
          borderBottomColor: "white",
        },
      },
    },
    MuiFormControl: {
      root: {
        "&.Mui-focused": {
          border: "none",
        },
      },
    },

    MuiFormLabel: {
      root: {
        color: secondaryColor,
        "&.Mui-focused": {
          color: secondaryColor,
        },
      },
    },
  },
});

export { theme };
