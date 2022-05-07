const Button = ({children, style}) => {
  let classes = "w-full p-4 rounded-md text-white font-display text-xl"
  classes+= (style !== 'free') ? ' bg-fam-orange drop-shadow-md' : ' font-light font-sans text-lg'
  
  return (
    <button className={classes}>
      <span className="drop-shadow-md">{children}</span>
    </button>
  )
}

export default Button;