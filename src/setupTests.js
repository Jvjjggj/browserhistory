import {Component} from 'react'

class SetupTest extends Component {
  deleteList = () => {
    const {details, deleteUserOnClick} = this.props
    const {id} = details
    deleteUserOnClick(id)
  }

  render() {
    const {details} = this.props
    const {timeAccessed, logoUrl, title} = details
    return (
      <li className="list">
        <p className="timePara">{timeAccessed}</p>
        <img className="imgLogo" src={logoUrl} alt="app logo" />
        <p className="titlePara">{title}</p>
        <button
          id="delete"
          type="button"
          className="btn"
          onClick={this.deleteList}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default SetupTest
