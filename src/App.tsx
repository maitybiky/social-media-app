import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { theState } from "./state/index";
import Navbar from "./scenes/Navbar/Navbar";

function App() {
  const { theme } = theState();
  const Ctheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  console.log("theme", theme);
  const isAuth = true;

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={Ctheme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
