import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import AddTheme from "./components/AddTheme/AddTheme";
import ThemeMenu from "./components/ThemeMenu/ThemeMenu";
import LandingPage from "./pages/LandingPage/LandingPage";

import GlobalStyle from "./design/GlobalStyle";

function App() {
	const theme = useSelector((state) => state.theme.value);
	const themes = useSelector((state) => state.themesArr.value);

	console.log("ooooooo", themes);
	return (
		<div className="app">
			<GlobalStyle theme={theme}></GlobalStyle>
			<AddTheme />
			<ThemeMenu />
			<LandingPage />
		</div>
	);
}

export default App;
