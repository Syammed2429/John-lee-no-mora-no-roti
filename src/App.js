import './App.css';
import { Text, Image, Button, Box } from '@chakra-ui/react'
import john from './assets/john lee.webp'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text>Please Donate to the Zhongli No Mora No Roti</Text>
        <Text>Website is coming soon</Text>
        <Image src={john} boxSize='20vw'
          objectFit='cover' />
        <Box m={4}>
          <Button colorScheme='teal'>Donate us Mora</Button>

        </Box>

      </header>
    </div>
  );
}

export default App;
