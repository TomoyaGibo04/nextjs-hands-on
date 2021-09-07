import { createTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import { blueGrey } from '@material-ui/core/colors';

export const palette = {};

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: blueGrey,
  },
});

export default theme;
