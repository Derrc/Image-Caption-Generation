import FileUploadButton from './components/FileUploadButton'
import { Container, Background, Text } from './Styles'

function App() {

  return (
      <Background>
        <Container>
          <Text fontSize='80px'> Image Caption Generation </Text>
          <FileUploadButton text='Upload'/>
        </Container>
      </Background>
  )
}

export default App