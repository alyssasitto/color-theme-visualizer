import { useSelector } from "react-redux";

import AddTheme from "./components/AddTheme/AddTheme";
import ThemeMenu from "./components/ThemeMenu/ThemeMenu";
import LandingPage from "./pages/LandingPage/LandingPage";
import HexCodes from "./components/HexCodes/HexCodes";

import GlobalStyle from "./design/GlobalStyle";

function App() {
	const theme = useSelector((state) => state.theme.value);

	return (
		<div className="app">
			<GlobalStyle theme={theme}></GlobalStyle>
			<AddTheme />

			<ThemeMenu />
			<HexCodes />

			<LandingPage />
		</div>
	);
}

export default App;
