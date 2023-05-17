import { Box, Heading } from '@chakra-ui/react'
import { Transition } from '../../components/Transition'
import Head from 'next/head'
import ProjectListItem from '../../components/ProjectListItem'

export default function ProjectPage() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Transition>
                <Box mt={10}>
                    <Heading>Projects</Heading>

                    <ProjectListItem
                        title="Rustmon"
                        body="Since I'm a believer in learning by doing, this small project is just for me to implement
                        the things that I learn about the Rust programming language as I go along reading the
                        Rust book in the form of a little terminal based Pokèmon battle game"
                        year={'2023'}
                        techs={'Rust'}
                        codeHref={'https://github.com/IsakLarsson/rustmon'}
                    />
                    <ProjectListItem
                        title="Journeys"
                        body="Journeys is an internal project developed at Netlight, 
                        aimed at providing employees with a personalized reflection tool. 
                        The project originated from a hackathon and evolved into a comprehensive tool 
                        that visualizes the individual journey of employees within Netlight. Its 
                        purpose is to facilitate self-reflection and provide a platform for employees 
                        to track their professional growth and achievements."
                        year={'2022 - 2023'}
                        techs={
                            'Next.js, React.js, Typescript, Jest, Storybook, ChakraUI'
                        }
                    />
                    <ProjectListItem
                        codeHref="https://www.kaggle.com/code/isaklarsson/gan-art-generator"
                        title="GAN Art"
                        body="A simple deep learning model created for exploring the possibilities of
                        generating new art through machine learning based on the
                        worlds greatest artworks. Although much smaller than
                        today's DALL-E's and Stable diffusion, it
                        managed to generate some interesting results"
                        year={'2021'}
                        techs={'Python, Tensorflow, Keras'}
                    />
                </Box>
            </Transition>
        </>
    )
}
