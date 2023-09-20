/* eslint-disable react/button-has-type */
import {Component} from 'react'

import SetupTest from './setupTests'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {initialHistory: initialHistoryList, search: ''}

  track = event => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({search: event.target.value})
  }

  deleteUserOnClick = id => {
    const {initialHistory} = this.state
    // eslint-disable-next-line no-unused-vars
    const deleteData = initialHistory.filter(i => i.id !== id)
    this.setState({initialHistory: deleteData})
  }

  render() {
    const {initialHistory} = this.state
    const {search} = this.state
    const filterData = initialHistory.filter(i => i.title.includes(search))
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line consistent-return
    const emptyContainer = () => {
      if (filterData.length === 0) {
        return true
      }
    }

    return (
      <div>
        <section className="section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searchContainer">
            <div className="searchLogo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              onChange={this.track}
              className="inputElement"
              type="search"
              placeholder="Search history"
            />
          </div>
        </section>
        <ul className="unOrderList">
          {emptyContainer() && <p>There is no history to show</p>}
          {filterData.map(i => (
            <SetupTest
              details={i}
              deleteUserOnClick={this.deleteUserOnClick}
              key={i.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
