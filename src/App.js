import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';


function App() {
  return (
    <>
      <Header 
      className='breddit-header'
      appName='Breddit'/>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
