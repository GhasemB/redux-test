import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../feature/users/usersSlice';


const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users) ??[]

  console.log({users})
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <div>
      {
        users && users?.users.map(user=> (
          <p>{user.name}</p>
        ))
      }
    </div>
  )
}

export default Users
