import Square from '../components/Square'
import Container from '../components/Container'
import Content from '../components/Content'
import Title from '../components/Title'

const Customization = () => {
  return (
    <Content align="text-center">
      <Container>
        <Title>Customization</Title>
        <p><a className="text-blue-600 font-bold underline" target="_blank" href="https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js">tailwind.config.js</a></p>
        <p>This is normal text.</p>
        <p className="text-red-600">This is red-600 text.</p>
        <p className="text-purple-300">This is purple-300 text.</p>
        <p className="text-primary">This is my custom color, `primary`.</p>
        <div className="flex justify-center items-center mt-10">
          <Square color="bg-primary" />
          <Square color="bg-blue-300" />
          <Square color="bg-secondary" />
        </div>
      </Container>
    </Content>
  )
}

export default Customization