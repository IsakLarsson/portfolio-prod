import { Avatar } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Selfie() {
    return (
        <Avatar
            borderColor={'whitesmoke'}
            borderWidth={'4px'}
            size="2xl"
            src={'images/Selfie.webp'}
        />
    )
}
