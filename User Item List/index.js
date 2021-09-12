import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import UserItem from '../UserItem'

class UserItemList extends Component {
  state = {
    isLoading: true,
    UserData: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getUserData()
    // this.getUpdatedUserData()
  }

  //   using get method to get json data
  getUserData = async () => {
    const response = await fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      email: eachData.email,
      role: eachData.role,
    }))
    this.setState({UserData: updatedData, isLoading: false})
  }
  //   Tried using post method but unable to get.
  //   getUpdatedUserData = async () => {
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({title: 'React POST Request Example'}),
  //     }
  //     const response = await fetch(
  //       'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
  //       requestOptions,
  //     )
  //     const data = await response.json()
  //     const editedUpdatedData = data.map(eachData => ({
  //       id: eachData.id,
  //       name: eachData.name,
  //       email: eachData.email,
  //       role: eachData.role,
  //     }))
  //     this.setState({UserData: editedUpdatedData})
  //   }

  //   deleting user item when clicked on delete button by adding onCLick event
  deleteUserDetails = id => {
    const {UserData} = this.state
    const updatedResults = UserData.filter(eachItem => eachItem.id !== id)

    this.setState({UserData: updatedResults})
  }

  //   onClickEditItem = () => {
  //     this.setState({UserData: this.getUpdatedUserData()})
  //   }

  //   converting name case and checking input text
  renderUserItemList = () => {
    const {UserData, searchInput} = this.state
    const newResults = UserData.filter(eachResult =>
      eachResult.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        {newResults.map(eachUser => (
          <UserItem
            key={eachUser.id}
            UserDataDetails={eachUser}
            // onClickEditItem={this.onClickEditItem}
            deleteUserDetails={this.deleteUserDetails}
          />
        ))}
      </div>
    )
  }

  // comparing input text and showing results accordingly

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    this.renderUserItemList()
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="user-detail-container">
        <input
          type="search"
          className="search-Input"
          placeholder="Select or Search by Name"
          onChange={this.onChangeSearchInput}
        />
        <nav className="header-top">
          <input type="checkbox" className="checkbox-main" />
          <p className="user-heading">Name</p>
          <p className="user-heading">Email</p>
          <p className="user-heading">Role</p>
          <p className="user-heading">Actions</p>
        </nav>
        <div>
          {/* displaying loader while fetching data */}
          {isLoading ? (
            <Loader type="Rings" color="#00e7ff" height={80} width={80} />
          ) : (
            /* after fetching data is displayed */
            this.renderUserItemList()
          )}
        </div>
        {/* Haven't learnt pagination so just displaying UI */}
        <nav className="header-bottom">
          <button type="button" className="delete-selected-button">
            Delete Selected
          </button>
          <div className="navigation-delete">
            <button type="button" className="button">
              <img
                src="https://tinyurl.com/leftarrow13310377"
                className="arrow"
                alt="left double arrow"
              />
            </button>
            <button type="button" className="button">
              <img
                src="https://tinyurl.com/leftsinglearrow13310492"
                className="arrow"
                alt="left single arrow"
              />
            </button>
            <button type="button" className="button">
              <p> 1 </p>
            </button>
            <button type="button" className="button">
              <p> 2 </p>
            </button>
            <button type="button" className="button">
              <p> 3 </p>
            </button>
            <button type="button" className="button">
              <p> 4 </p>
            </button>
            <button type="button" className="button">
              <p> 5 </p>
            </button>
            <button type="button" className="button">
              <img
                src="https://tinyurl.com/rightsinglearrow13310614"
                className="arrow"
                alt="right single arrow"
              />
            </button>
            <button type="button" className="button">
              <img
                src="https://tinyurl.com/rightdoubtarroww13310603"
                className="arrow"
                alt="left double arrow"
              />
            </button>
          </div>
        </nav>
      </div>
    )
  }
}
export default UserItemList
