import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { ExperienceItem } from '../components/ExperienceItem'
import Selfie from '../components/Selfie'
import { StaggeredItem } from '../components/StaggeredItem'
import { Tags } from '../components/Tags'
import { Transition } from '../components/Transition'
import { FaGuitar } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import Head from 'next/head'
export default function Home() {
    return (
        <>
            <Head>
                <title>Isak Larsson</title>
            </Head>
            <Transition>
                <StaggeredItem>
                    <Flex
                        wrap={'wrap-reverse'}
                        my={'2rem'}
                        justify={['center', 'space-between']}
                        alignItems={'center'}
                    >
                        <Flex direction={'column'}>
                            <Heading>Hello there, I&apos;m Isak</Heading>
                            <Tags
                                tags={[
                                    { title: 'Developer', icon: AiOutlineCode },
                                    { title: 'Music Lover', icon: FaGuitar },
                                    /* {
                                        title: 'Lifting enthusiast',
                                        icon: IoIosFitness,
                                    }, */
                                ]}
                                color="teal"
                            />
                        </Flex>
                        <Selfie />
                    </Flex>
                </StaggeredItem>
                <StaggeredItem>
                    <Heading variant="underline">About me</Heading>
                    <Text align={['initial']}>
                        I&apos;m a developer with a passion for creating
                        products that are both beautiful and easy to use.
                        I&apos;m always looking to learn more about different
                        aspects of tech, like backend development, mobile
                        development and functional programming. I&apos;m also a
                        big believer in the importance of good user experience.
                        When I&apos;m not coding, you can usually find me
                        picking away on my guitar, or in the gym.
                    </Text>
                    <br />
                    <Text align={['initial']} mb={'2rem'}>
                        I love the challenge and ultimate satisfaction of
                        learning something new, be it a new concept, learning
                        how to paint or learning a new song on the guitar. The
                        feeling of satisfaction after learning something new is
                        the same no matter the area. I&apos;m excited to take on
                        new projects and continue growing as a developer, and as
                        a person. Let&apos;s build something awesome together!
                    </Text>
                </StaggeredItem>
                <StaggeredItem>
                    <Heading variant={'underline'}>Experience</Heading>
                </StaggeredItem>
                <VStack alignItems={'stretch'} gap={2}>
                    <StaggeredItem>
                        <ExperienceItem
                            src="/images/savrlogo.webp"
                            title="Software Engineer"
                            subTitle="SAVR"
                            period="Sep 2023 - Present"
                        />
                    </StaggeredItem>
                    <StaggeredItem>
                        <ExperienceItem
                            src="/images/netlight.webp"
                            title="Consultant"
                            subTitle="Netlight"
                            period="Sep 2022 - Aug 2023"
                        />
                    </StaggeredItem>
                    <StaggeredItem>
                        <ExperienceItem
                            src="/images/Coeo.webp"
                            title="Frontend Developer"
                            subTitle="Coeo"
                            period="Jun 2021 - Jun 2022"
                        />
                    </StaggeredItem>
                    <StaggeredItem>
                        <ExperienceItem
                            src="/images/uminova.webp"
                            title="Frontend Developer"
                            subTitle="Metrium"
                            period="Feb 2021 - Jun 2021"
                        />
                    </StaggeredItem>
                </VStack>
                <StaggeredItem>
                    <Heading variant={'underline'}>Education</Heading>
                    <ExperienceItem
                        src="/images/umu.webp"
                        title="Umeå University"
                        subTitle="Master of science, Interaction & Design"
                    />
                </StaggeredItem>
            </Transition>
        </>
    )
}
