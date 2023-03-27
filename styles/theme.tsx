import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
const components = {
    Heading: {
        variants: {
            underline: {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#3A3B49',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
}
const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: '',
                color: '#eee',
            },
        }),
    },
    config,
    fonts: {
        heading: `'ABeeZee', sans-serif`,
        body: `'M PLUS 1 Code', sans-serif`,
    },
    components,
})

export default theme
