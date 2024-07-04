import { useState } from "react"

const Clock = () => {
 const [hour12, setHour12]=useState(false)


  let currentTime = new Date()
  


const formattedTime = currentTime.toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: hour12,
  
});

      
const handleHoursChange = () => {
  setHour12(!hour12)
  
}

  return (
    <div>
    <h3>{formattedTime}</h3>
      <button onClick={handleHoursChange}>24 hours or 12 hours format</button>
      </div>
  )
}

export default Clock







