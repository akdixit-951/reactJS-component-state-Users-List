import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://res.cloudinary.com/ddz3yejfj/image/upload/v1664439326/profile_pic_qoivm7.jpg',
    name: 'Akash Dixit',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    // console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUsersDetailsList = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      userDetailsList: filteredUsersDetailsList,
    })
    console.log(`User with Unique no: ${uniqueNo} removed`)
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              deleteUser={this.deleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
