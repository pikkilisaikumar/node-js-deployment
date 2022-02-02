const Sai = props => {
  const {each, clickedData} = props
  const {id, todo} = each

  const textClicked = () => {
    clickedData(id)
  }

  return (
    <li>
      <button type="button" onClick={textClicked}>
        <em>{todo}</em>
      </button>
    </li>
  )
}

export default Sai
