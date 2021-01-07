
import './App.css';
import imageInSrc from "./imageInSrc.PNG"
import "./style.css"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vm"}}>
        <h1 className="title red">Your name here</h1>
        <br/> 
        <img src={imageInSrc} />
        <br/>
        <img src="/imageInPublic.PNG" />
      </div>
      <video width={320} height={240} controls>
          <source src="/myVideo.mp4" type="video/mp4" />
      </video>
          
    
    </div>
  );
}

export default App;
