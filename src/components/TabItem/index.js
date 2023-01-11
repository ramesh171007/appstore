// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickedTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeBtn = isActive ? 'active-btn' : ''

  const onClickedTab = () => {
    clickedTab(tabId)
  }
  return (
    <li className="li-container">
      <button
        type="button"
        className={`tab-btn ${activeBtn}`}
        onClick={onClickedTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
