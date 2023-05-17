import {
    Box,
    GridItem,
    Heading,
    HStack,
    Text,
    Tooltip,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import { StaggeredItem } from './StaggeredItem'
import { BsGithub } from 'react-icons/bs'
import { nanoid } from 'nanoid'

type Props = {
    title: string
    year: string
    body: string
    codeHref?: string
    techs: string
}

const ProjectListItem = ({ title, body, codeHref, year, techs }: Props) => {
    return (
        <StaggeredItem>
            <GridItem
                my={'1rem'}
                p={'1rem'}
                borderRadius={'md'}
                background="#242835"
            >
                <VStack
                    p={['1rem 1', '1rem']}
                    mt={['1rem', '0']}
                    alignItems={'flex-start'}
                >
                    <HStack w={'full'} justify={'space-between'}>
                        <Heading size={'md'}>{title}</Heading>
                        <Text fontSize={'sm'} color={'gray.400'}>
                            {year}
                        </Text>
                    </HStack>
                    <Text>{body}</Text>
                    <HStack w={'full'} justify={'space-between'}>
                        <Text fontSize={'sm'} key={nanoid()} color={'gray.400'}>
                            {techs}
                        </Text>
                        {codeHref ? (
                            <Tooltip label={'Check out the code!'}>
                                <Box>
                                    <a
                                        href={codeHref}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <BsGithub size={25} />
                                    </a>
                                </Box>
                            </Tooltip>
                        ) : (
                            ''
                        )}
                    </HStack>
                </VStack>
            </GridItem>
        </StaggeredItem>
    )
}

export default ProjectListItem
