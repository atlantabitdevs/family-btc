const InputText = ({placeholder, value, type, onChange}) => {
  return (
    <input
      type={type ? type : 'text'}
      className="w-full p-4 rounded-md font-light text-lg text-black"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputText;