import Container from '../components/Container'
import Content from '../components/Content'
import Title from '../components/Title'

const Links = () => {
  return (
    <Content align="text-center">
      <Container>
        <Title>Helpful Links</Title>
        <ul>
          <li><a className="link" href="https://tailwindcss.com" target="_blank">Tailwind Docs</a></li>
          <li><a className="link" href="https://play.tailwindcss.com" target="_blank">Tailwind Playground</a></li>
          <li><a className="link" href="https://www.youtube.com/watch?v=D84pmKtQB3w" target="_blank">Tailwind Talk</a></li>
          <li><a className="link" href="https://tailwind-demo-2020.netlify.app/" target="_blank">Over the wire demo</a></li>
        </ul>
      </Container>
    </Content>
  )
}

export default Links