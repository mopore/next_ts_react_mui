import { SxProps, Theme, } from "@mui/material";

// Color Palette: https://mui.com/system/palette/
// Overview of sx props: https://mui.com/system/getting-started/the-sx-prop/

const jniStyles : Record<string, SxProps<Theme> | undefined> = {
	redBgHoverTransition : {
	  '&:hover': {
	    backgroundColor: "secondary.main",
	  },
	  transition: (theme: Theme) => theme.transitions.create('background-color', {
	    // duration: theme.transitions.duration.standard,
	    duration: 1000
	  }),
	},
	pageTitle : {
		typography: 'h2',
		color: 'text.primary',
		textAlign: 'center',
		paddingTop: '1rem',
		paddingBottom: '1rem',
	},
	backdrop : {
		color: '#fff',
		zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
	}
}

export default jniStyles;