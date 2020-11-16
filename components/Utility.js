import Container from '../components/Container'
import Content from '../components/Content'
import Title from '../components/Title'
import Badge from '../components/normal/Badge'
import { Badge as TailwindBadge } from '../components/tailwind/Badge'

const Utility = () => {
  return (
    <Content align="text-center">
      <Container>
        <Title>Utility First</Title>
        <p>Normal way</p>
        <Badge />
        <p className="mb-4 mt-10">Tailwind way</p>
        <TailwindBadge />
      </Container>
    </Content>
  )
}

export default Utility