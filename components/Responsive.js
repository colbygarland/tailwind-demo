import Container from '../components/Container'
import Content from '../components/Content'
import Title from '../components/Title'

const Responsive = () => {
  return (
    <Content>
      <Container>
        <div class="text-center">
          <Title>Responsive</Title>
        </div>
        <div class="flex align-center justify-center">
          <div class="md:flex lg:block xl:flex max-w-xl xl:max-w-5xl">
            <div class="md:flex-shrink-0 lg:flex-shrink">
              <img class="rounded-lg md:w-56 lg:w-full xl:w-64" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format" alt="Woman paying for a purchase" />
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
              <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                <span class="md:hidden">Small</span>
                <span class="hidden md:inline lg:hidden">Medium</span>
                <span class="hidden lg:inline xl:hidden">Large</span>
                <span class="hidden xl:inline">X-Large</span>
              </div>
              <a href="#" class="block mt-1 text-lg lg:text-2xl leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
              <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
        </div>
      </Container>
    </Content>
  )
}

export default Responsive