import {Component} from 'react'

import UserItemList from '../UserItemList'

import './index.css'

class AdminTracker extends Component {
  render() {
    return (
      <div className="user-tracker-app">
        <UserItemList />
      </div>
    )
  }
}
export default AdminTracker
