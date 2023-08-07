"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { Roboto } from "next/font/google";

const roboto = Roboto({ 
	weight: ["300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"] 
});

const themeOptions: ThemeOptions = {
	typography: {
		fontFamily: "Roboto, sans-serif",
		fontSize: 12,
	},
	palette: {
		mode: "dark",
		// background: {
		// 	default: "#FF00FF",
		// },
	},
	components: {},
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: "mui"}}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
}