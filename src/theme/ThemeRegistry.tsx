"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
// import { Roboto } from "next/font/google";
import { deepOrange, grey } from "@mui/material/colors";

// const roboto = Roboto({ 
// 	weight: ["300", "400", "500", "700"],
// 	style: ["normal", "italic"],
// 	subsets: ["latin"] 
// });

const themeOptions: ThemeOptions = {
	typography: {
		fontFamily: "Roboto, sans-serif",
		fontSize: 12,
	},
	palette: {
        mode: "dark",
        background: {
            default: "#121212",  // Almost black
            paper: "#1a1a1a",  // Slightly lighter than the default background
        },
        primary: {
            main: "#FF007F",  // Neon Pink
            contrastText: "#ffffff",  // White text on neon background
        },
        secondary: {
            main: "#00FFFF",  // Neon Cyan
            contrastText: "#000000",  // Black text on neon background
        },
        text: {
            primary: "#ffffff",  // Main text as white
            secondary: "#A0A0A0",  // Secondary text as a bit dull white
        },
        divider: "#333333",  // A darker divider which is subtle
    },
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