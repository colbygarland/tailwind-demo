import Head from 'next/head'
import Container from './Container'

const PageHeader = (props) => {
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="shadow block w-full py-3 text-3xl lg:text-5xl bold sticky">
        <Container>
          <h1>{props.pageTitle}</h1>
        </Container>
      </header>
    </>
  )
}

export default PageHeader