import { useState } from "react";

const useCounter = () => {
 const [counter, setCounter] = useState()
 const increment = () => {
     setCounter(prev => prev + 1 )
 }
}
 