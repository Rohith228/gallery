import './index.css'

const ThumbnailItem = props => {
  const {thumbnaillUrl, imageAltText, stateChange, id} = props

  const changeState = () => {
    stateChange(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={changeState} className="button">
        <img src={thumbnaillUrl} alt={imageAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
