
// import { useState } from "react";




// const Card = ({ title, content }) => {
//   //useState returns an array with the state we set up and a function to change it
//   // destructure these values from the array
//   const [isShowing, setIsShowing] = useState(false);
//   const [isBorder, setIsBorder]=useState(false)
  
//   const handleBorderClick = () => {
//     setIsBorder(!isBorder)
//   }


//   const handleClick = () => {
//     setIsShowing(!isShowing);
//   };
//   console.log(title + " rendered");
//   // we could derive the value of the button text
//   //   let buttonText;
//   //   if (isShowing) {
//   //     buttonText = "Hide Paragaph";
//   //   } else {
//   //     buttonText = "Show Paragraph";
//   //   }


//   return (
//     <>
//       <div className={isBorder ? styles.border : styles.card} >

//         <button onClick={handleBorderClick}>show border</button>
//       <h2>{title}</h2>
//       <button onClick={handleClick}>
//         {/* ternary expression to determine hide or show */}
//         {isShowing ? "Hide" : "Show"} Paragraph
//       </button>
//       {isShowing && <p>{content}</p>}
//     </div >
//      </> 
//   );
// };

// export default Card;

import styles from "./Card.module.scss";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  const [hour, setHour] = useState(generateRandomHour());
  const [isLightMode, setIsLightMode] = useState(hour >= 6 && hour < 18);  // default is day time


  function generateRandomHour() {
    return Math.floor(Math.random() * 25); 
  }

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsLightMode(previous => !previous);
  };


  const generateNewHour = () => {
    const newHour = generateRandomHour();
    setHour(newHour);
    setIsLightMode(newHour >= 6 && newHour < 18);
  };

  return (
    <div className={`${styles.card} ${isLightMode ? styles['light-mode'] : styles['dark-mode']}`}>
      <div className="icon">
        {hour >= 6 && hour < 18 ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
           <FontAwesomeIcon icon={faMoon} />
      
        )}
      </div>
      <div >{hour}</div>
      <div>
        <button onClick={toggleMode}>Toggle Mode</button>
        <button onClick={generateNewHour}>Generate New Hour</button>
      </div>
    </div>
  );
};

export default Card;