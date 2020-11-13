import Container from './Container'

export default function PageFooter() {
  return (
    <footer className="fixed bottom-0 border-t-2 border-teal-600 block w-full py-3">
      <Container>
        <p>&copy; 2020 Tailwind Demo</p>
      </Container>
    </footer>
  )
}