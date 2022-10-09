
const Component = () => {
    const handleClick = () => {
        alert("hii");
    }
  return (
    <div>
        <button onClick={handleClick()}>CLick</button>
    </div>
  )
}

export default Component