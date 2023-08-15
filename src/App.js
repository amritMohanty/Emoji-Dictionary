import './App.css';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import EmojiDictionary from './components/EmojiDictionary';


function App() {
  return (
    <div className="App">
      <Hero name='Emoji Dictionaryyyy'/>
      <SearchBar/>
      <EmojiDictionary/>
    </div>
  );
}

export default App;
