import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
interface Props {
    src: string
    title: string
    subTitle: string
    period?: string
}
export const ExperienceItem: React.FC<Props> = ({
    src,
    title,
    subTitle,
    period,
}) => {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
        >
            <Flex
                borderRadius={'md'}
                bg={'#242835'}
                justify={'space-between'}
                alignItems={'center'}
                p={'0 1rem 0 0'}
            >
                <Flex alignItems={'center'}>
                    <Image
                        borderRadius={'md'}
                        width={75}
                        height={75}
                        src={src}
                        alt="company logo"
                    />
                    <Flex ml={'1rem'} direction={'column'}>
                        <Heading size={['sm', 'md']}>{title}</Heading>
                        <Text
                            color={'gray.400'}
                            fontWeight={'medium'}
                            fontSize={['sm', 'md']}
                        >
                            {subTitle}
                        </Text>
                    </Flex>
                </Flex>
                <Text
                    color={'gray.400'}
                    fontWeight={'medium'}
                    fontSize={['sm', 'md']}
                >
                    {period}
                </Text>
            </Flex>
        </motion.div>
    )
}
