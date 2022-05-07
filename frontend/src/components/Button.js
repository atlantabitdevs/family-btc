import React from "react";

const Button = ({children, style, to, disabled, onClick}) => {
  let classes = "w-full p-4 rounded-md text-white font-display text-xl"
  if(style !== 'free') {
    classes += ' drop-shadow-md'
    classes += disabled ? ' bg-fam-orange-inactive' : ' bg-fam-orange'
  }
  else {
    classes += ' font-light font-sans text-lg'
  }
  
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      <span className="drop-shadow-md flex flex-row align-center justify-center space-x-2">{children}</span>
    </button>
  )
}

export default Button;