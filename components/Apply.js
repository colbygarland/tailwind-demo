import Container from '../components/Container'
import Content from '../components/Content'
import Title from '../components/Title'

const Apply = () => {
  return (
    <Content align="text-center">
      <Container>
        <Title>@apply directive</Title>
        <a class="bg-teal-600 px-6 py-2 text-white font-bold rounded-md mr-4 transition duration-300 hover:bg-teal-800" href="">Button</a>
        <a class="btn" href="">Button</a>
      </Container>
    </Content>
  )
}

export default Apply