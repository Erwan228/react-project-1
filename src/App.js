import Navbar from './Navbar'
import Home from './Home'

function App() {
  // const title = 'In the shadow of the shield';
  // const likes = 5000;
  // const link = "http://www.google.com";
  /*objects and booleans are not allowed*/


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{'Hello, Paladins'}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.ceil(Math.random() * 10)}</p>

        <a href={link} target='blank'>Google site</a> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
