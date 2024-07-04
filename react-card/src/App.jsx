
import './App.css'
import Card from "./components/Card/Card";
import Clock from "./components/Clock/Clock";


function App() {

  
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "1em",
        }}
      >
        <Card title="Card 1" content="This is the first card" />
        <Card title="Card 2" content="This is the second card" />
       
      </div>

      
      <div
      style={{
        padding: '5rem'
      }}>
        <Clock></Clock>
      </div> */}
       <Clock/>
      <Card />
     
    
    </>
  );
}

export default App
