import Container from '../components/Container'
import Content from '../components/Content'
import Title from '../components/Title'

const Links = () => {
  return (
    <Content align="text-center">
      <Container>
        <Title>Helpful Links</Title>
        <ul>
          <li><a class="link" href="https://play.tailwindcss.com" target="_blank">Tailwind Playground</a></li>
          <li><a class="link" href="https://www.youtube.com/watch?v=D84pmKtQB3w" target="_blank">Tailwind Talk</a></li>
        </ul>
      </Container>
    </Content>
  )
}

export default Links