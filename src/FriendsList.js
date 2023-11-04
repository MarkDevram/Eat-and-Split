import React, { useState } from "react"
import "./index.css"
import Frend from "./Frend"

function FriendsList({ FriendsList }) {
  return (
    <div className="sidebar">
      <ul>
        {FriendsList.map((Friend) => {
          return <Frend data={Friend} />
        })}
      </ul>
      <button className="button">Add friend</button>
    </div>
  )
}

export default FriendsList
