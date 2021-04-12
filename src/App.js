import './App.css';
import Header from './features/header/header';
import Home from './features/home/home';
import Sidebar from './features/sidebar/sidebar';

function App() {
  return (
    <>
      <Header 
      className='breddit-header'
      appName='Breddit'/>
      <main>
        <Home />
        <Sidebar />
      </main>
    </>
  );
}

export default App;
