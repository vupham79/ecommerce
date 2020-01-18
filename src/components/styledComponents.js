import {
  withStyles,
  Typography,
  TextField,
  Button,
  FormControl
} from "@material-ui/core";

export const StyledTypography = withStyles({
  root: {
    fontFamily: "V1"
  }
})(Typography);

export const StyledTypographyBold = withStyles({
  root: {
    fontFamily: "V2 !important"
  }
})(Typography);

export const StyledTextField = withStyles({
  root: {
    "& .Mui-focused": {
      color: "black"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black !important"
    },
    "& .MuiInputBase-formControl": {
      fontFamily: "V1",
      backgroundColor: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black"
    },
    "& .MuiFormLabel-root": {
      fontFamily: "inherit"
    }
  }
})(TextField);

export const StyledDarkButton = withStyles({
  root: {
    background: "linear-gradient(45deg, black 30%, black 90%)",
    borderRadius: 0,
    color: "white"
  },
  label: {
    textTransform: "uppercase",
    lineHeight: "24px",
    fontWeight: 700
  }
})(Button);

export const StyledButton = withStyles({
  root: {
    borderRadius: 0
  },
  label: {
    textTransform: "uppercase",
    lineHeight: "24px"
  }
})(Button);

export const StyledFormControl = withStyles({
  root: {
    "& .MuiInputBase-root": {
      fontFamily: "inherit"
    }
  },
  fullWidth: {
    "& .MuiInputBase-input": {
      background: "white"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black"
    }
  }
})(FormControl);
