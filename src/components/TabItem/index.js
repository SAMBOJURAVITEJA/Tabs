import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabs, active} = props
  const {displayText, tabId} = tabDetails

  const clickedButton = () => {
    changeTabs(tabId)
  }

  const className = active && 'active-tab-btn'

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={clickedButton}
        className={`tab-btn ${className}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
