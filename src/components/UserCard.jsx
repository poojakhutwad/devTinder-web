import React from 'react'

const UserCard = ({ user }) => {
    console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={user?.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"}
      alt="user"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.firstName} {user?.lastName}</h2>
    <p>{user?.gender}, {user?.age}</p>
    <p>{user?.about}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Ignore</button>
       <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard