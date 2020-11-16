import Head from 'next/head'
import Container from './Container'

const PageHeader = (props) => {
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-center shadow block w-full py-3 sticky top-0 z-10 bg-white">
        <Container>
          <h1 className="text-2xl lg:text-4xl bold">{props.pageTitle}</h1>
        </Container>
      </header>
    </>
  )
}

export default PageHeader