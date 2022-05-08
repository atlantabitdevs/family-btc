import React from "react";

const Button = ({ children, style, to, disabled, onClick, size, direction }) => {
  let classes = "w-full rounded-md text-white font-display"

  if (size === 'small') classes += ' p-2 text-lg'
  else classes += ' p-4 text-xl'

  if (style !== 'free') {
    classes += ' drop-shadow-md'
    classes += disabled ? ' bg-fam-orange-inactive' : ' bg-fam-orange'
  }
  else {
    classes += ' font-light font-sans text-lg'
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      <span className={"drop-shadow-md flex align-center justify-center items-center" + (direction === 'vertical' ? ' flex-col space-y-2' : ' flex-row space-x-2')}>
        {children}
      </span>
    </button>
  )
}

export default Button;