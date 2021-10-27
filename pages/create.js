import Head from 'next/head'
import Form from '../components/form/CreateForm'
import Container from '../components/other/ContainerLayout'

const create = () => {
    return (
        <>
            <Head>
                <title>Create Poll free - Pollin</title>
                <link rel="icon" href="/icon.png" />  
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="black"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="create poll for free , with feature deadline ,private result"></meta>
                <meta name="keywords" content="poll free, website poll free,create poll free" />
            </Head>
            <Container >
                <Form />
            </Container>
        </>
    )
}

export default create
