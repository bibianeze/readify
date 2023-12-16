import React from 'react'
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    
  <div className="vh-100 d-flex justify-content-center align-items-center">
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </div>
  
  )
}

export default Loading
