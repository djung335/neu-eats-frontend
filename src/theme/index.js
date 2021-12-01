import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: (props) => ({
      button: {
        mr: 3,
        colorScheme: 'white',
        bg: '#aacaef'
      },
      colors: {
        neuPurple: "#7986e6",
        neuBlue: "#aacaef",
        neuGray: "#b0b0b0",
        neuCheckmarkGreen: "#7CB423",
        neuCheckmarkRed: "#DD4242",
      },
    }),
  },
})

export default overrides;