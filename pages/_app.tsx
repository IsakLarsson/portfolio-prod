import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/m-plus-rounded-1c'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import theme from '../styles/theme'
import Layout from './layout'

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <meta
                    name="description"
                    content="My personal portfolio, welcome!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
            </Script>
            <Navbar router={router} />
            <Layout>
                <AnimatePresence mode="wait" initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
