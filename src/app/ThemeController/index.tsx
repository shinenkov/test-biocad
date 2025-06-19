import { useEffect, useMemo, useState } from "react";
import { useMediaQuery, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "app/App";

export default function ThemeController() {
  const isSystemDark = useMediaQuery("(prefers-color-scheme: dark)");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mode, _setMode] = useState<"light" | "dark">(isSystemDark ? "dark" : "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
