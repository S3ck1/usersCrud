import React from 'react'

const UsersList= ({users}) => {
  return (
    <div className='userlist-container'>
      {users.map((usr) => (
        <li>
          
          <h2>{usr.name} {usr.lastname}</h2>

        </li>
      ))}
    </div>
  )
}

export default UsersList