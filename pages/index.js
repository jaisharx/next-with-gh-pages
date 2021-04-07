import Head from 'next/head';
import { Box, Link, Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box maxW="80%" m="auto">
                <Text fontSize="4xl">Hi, there</Text>
                <Text>
                    I'm a{' '}
                    <Link href="https://nextjs.org" isExternal color="blue.500">
                        nextjs
                    </Link>{' '}
                    project, and I'm hosted on{' '}
                    <Link
                        href="https://www.npmjs.com/package/gh-pages"
                        isExternal
                        color="blue.500"
                    >
                        gh-pages.
                    </Link>
                </Text>
            </Box>
        </>
    );
}
