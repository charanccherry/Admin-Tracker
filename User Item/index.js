import './index.css'

const UserItem = props => {
  const {UserDataDetails, deleteUserDetails} = props
  const {id, name, email, role} = UserDataDetails

  const onClickDeleteUserDetails = () => {
    deleteUserDetails(id)
  }

  //   const onClickEditUser = () => {
  //     onClickEditItem(id)
  //   }

  return (
    <>
      <div className="userItem">
        <div className="user-details">
          <button type="button" className="button-item">
            <input type="checkbox" className="checkbox" />
          </button>
          <p className="name-text">{name}</p>
          <p className="email-text">{email}</p>
          <p className="role-text">{role}</p>
          <div className="btn-cont">
            <button
              type="button"
              //   onClick={onClickEditUser}
              className="button-item"
            >
              {/* edit button */}
              <img
                src="https://tinyurl.com/edit13309076"
                alt="edit"
                className="edit"
              />
            </button>
            <button
              type="button"
              onClick={onClickDeleteUserDetails}
              className="button-item"
            >
              {/* delete button */}
              <img
                src="https://tinyurl.com/delete13309212"
                alt="delete"
                className="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
