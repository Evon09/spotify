import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    spotify: {
      100: "#1DB954",
      200: "#1ED760",
      black: "#000000",
      white: "#ffffff",
    },
    gray: {
      100: "#f7f7f7",
      200: "#121212",
      300: "#7b7b7b",
      400: "#504c4c",
      500: "#2d2d2d",
      card: "#272727",
    },
  },
  semanticTokens: {
    colors: {
      componentBody: {
        default: "gray.200",
        _dark: "gray.100",
      },
      musicCardBody: {
        default: "gray.200",
        _dark: "gray.100",
      },
      avatarModal: {
        default: "rgba(95, 95, 95, 0.5)",
        _dark: "rgba(29, 29, 29, 0.74)",
      },
      cardBody: {
        default: "gray.card",
        _dark: "spotify.white",
      },
      cardBodyHover: {
        default: "gray.400",
        _dark: "gray.300",
      },
      musicCardBodyHover: {
        default: "gray.400",
        _dark: "gray.300",
      },
      musicCardText: {
        default: "gray.300",
        _dark: "gray.200",
      },
      bgBody: {
        default: "spotify.black",
        _dark: "spotify.white",
      },
      btnBorder: {
        default: "gray.300",
        _dark: "gray.200",
      },
      btnText: {
        default: "gray.300",
        _dark: "gray.300",
      },
      btnTextHover: {
        default: "spotify.white",
        _dark: "spotify.black",
      },
      inputBorder: {
        default: "gray.300",
        _dark: "gray.200",
      },
      inputFocusBorder: {
        default: "white",
        _dark: "black",
      },
      text: {
        default: "white",
        _dark: "black",
      },
      primary: {
        default: "spotify.100",
        _dark: "spotify.100",
      },
      secondary: {
        default: "gray.800",
        _dark: "blackAlpha.800",
      },
      cardBg: {
        default: "blackAlpha.600",
        _dark: "blackAlpha.600",
      },
      hoverBg: {
        default: "whiteAlpha.100",
        _dark: "whiteAlpha.100",
      },
    },
  },
  components: {
    // Exemplo de como estender um componente existente
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "full",
        border: "1px solid",
        borderColor: "btnBorder",
        _hover: {
          borderColor: "text",
        },
      },
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "green", // default is gray
      },

      variants: {
        spotify: () => ({
          bg: "primary",
          color: "white",
          _hover: {
            bg: "spotify.200",
            transform: "scale(1.05)",
          },
          _active: { bg: "green.600" },
        }),
        btnIconFunction: () => ({
          bg: "transparent",
          color: "btnText",
          border: 0,
          transition: "ease 0.3s",
          borderRadius: "0px",
          gap: "5",
          _hover: {
            color: "btnTextHover",
          },
          _active: { bg: "spotify.100" },
        }),
        ghost: {
          _hover: { bg: "hoverBg" },
        },
      },
    },
    Badge: {
      baseStyle: {
        bg: "gray.300",
        color: "white",
        borderRadius: "full",
        px: "2",
        py: "1",
        fontSize: "0.6rem",
      },
      // defaultProps: {
      //   fontSize: "2px",
      // },
    },
    Divider: {
      baseStyle: {
        w: { base: "100%", sm: "100%", md: "80%" },
      },
      defaultProps: {
        orientation: "horizontal",
        w: { base: "100%", sm: "100%", md: "80%" },
      },
    },
    Switch: {
      baseStyle: {
        track: {
          bg: "gray.200", // Cor de fundo quando desligado
          _checked: {
            bg: "spotify.200", // Usa a cor spotify.200 diretamente
          },
        },
        thumb: {
          bg: "white",
        },
      },
      defaultProps: {
        size: "lg",
        variant: "sm",
      },
    },

    // Exemplo de como criar um componente personalizado
  },
  styles: {
    global: () => ({
      body: {
        bg: "bgBody",
        color: "text",
        overflowX: "hidden",
        transition: "background-color 0.3s ease",
      },

      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "full",
        bg: "primary",
      },
    }),
  },
});

export default theme;
