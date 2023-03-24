import { Box, Heading, Text } from '@chakra-ui/react'
import { ProjectGridItem } from '../../components/ProjectGridItem'
import { Transition } from '../../components/Transition'
import GanImage from '../../public/images/GAN.webp'
import ParadoxImage from '../../public/images/wideparadox.webp'
import FreshmanImage from '../../public/images/freshmanwide.webp'
import Head from 'next/head'

export default function ProjectPage() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Transition>
                <Box mt={10}>
                    <Heading>Projects</Heading>
                    <Text>
                        These are some of my earlier projects. This page is
                        still a work in progress and will be expanded in the
                        near future.
                    </Text>

                    <ProjectGridItem src={GanImage} title="DAIVinci">
                        A Deeplearning model for generating art based on the
                        worlds greatest artworks. Although much smaller than
                        today&apos;s DALL-E&apos;s and Stable diffusion, it
                        managed to generate interesting results
                    </ProjectGridItem>
                    <ProjectGridItem src={ParadoxImage} title="360 Feedback">
                        An employee evaluation webapp for game dev studio
                        Paradox Arctic to enable a more reliable, efficient and
                        time saving evaluation process.
                    </ProjectGridItem>
                    <ProjectGridItem
                        src={FreshmanImage}
                        title="University newcomers"
                    >
                        A mobile app for helping university newcomers to settle
                        in with their new friends and attend events to help
                        build social connections.
                    </ProjectGridItem>
                </Box>
            </Transition>
        </>
    )
}
