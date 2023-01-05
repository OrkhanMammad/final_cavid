import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Users = (props) => {
const [users, setUsers]=useState([])
useEffect(()=>{
const getUsers=async()=>{
setUsers(props.userList)


}
getUsers()



},[])
const searchHandler=(e)=>{
  setUsers(props.userList.filter(x=>x.fullname.includes(e.target.value)))


}






  return (

    <div>
      <input onChange={searchHandler} className='searchInput' type="text" placeholder='Search User By Fullname'/>
<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Adding Date</th>
      <th scope="col">E-Mail</th>
      
    </tr>
  </thead>
  <tbody>
    {users && users.map(x=>{
return(<tr key={x.id}>
  <th scope="row">{x.id}</th>
  <td>{x.fullname}</td>
  <td>{x.addingdate}</td>
  <td>{x.email}</td>
  
  
</tr>)


    })}
    
  </tbody>
</table>




    </div>
  )
}

export default Users