import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import ThemeMenu from "./components/ThemeMenu/ThemeMenu";
import LandingPage from "./pages/LandingPage/LandingPage";

import GlobalStyle from "./design/GlobalStyle";

function App() {
	const theme = useSelector((state) => state.theme.value);
	return (
		<div className="app">
			<GlobalStyle theme={theme}></GlobalStyle>
			<Navbar />
			<ThemeMenu />
			<LandingPage />
		</div>
	);
}

export default App;
