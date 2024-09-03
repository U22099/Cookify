const Ingredient = ({name, no}) => {
  return(
    <p className={(no > 20 ? "hidden md:flex ": "") +"bg-gray-100 rounded-full p-2 w-fit h-fit"}>{name}</p>
  )
}

export default Ingredient