import React,{useEffect} from 'react'
import Navbar from './Components/Navbar'
import Whychoose from './Components/Whychoose'
const Choose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Whychoose></Whychoose>
    </div>
  )
}

export default Choose
