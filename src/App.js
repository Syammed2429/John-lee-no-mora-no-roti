import './App.css';
import { Text, Image } from '@chakra-ui/react'
import john from './assets/john lee.webp'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text>Please Donate to the Zhongli No Mora No Roti</Text>
        <Text>Website is coming soon</Text>
        <Image src={john} boxSize='20vw'
          objectFit='cover' />

      </header>
    </div>
  );
}

export default App;
