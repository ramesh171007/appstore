import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-li-container">
      <div className="app-card-item">
        <img src={imageUrl} alt={appName} className="app-img-style" />
        <p>{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
