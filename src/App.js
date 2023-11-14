import { useState } from "react"
import "./index.css"
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    imageURL: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    imageURL: "https://i.pravatar.cc/48?u=933372",
    balance: 20.252,
  },
  {
    id: 499476,
    name: "Anthony",
    imageURL: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
]
export default function App() {
  const [Friends, setFriends] = useState(initialFriends)

  const [showAddFriend, setShowAddFriend] = useState(false)

  const [selectedFriend, setSelectedFriend] = useState(null)

  function hanldeSelectedFriend(friend) {
    console.log("hui")
    setSelectedFriend(friend)
    console.log(friend)
  }

  function handleShowFriend(e) {
    e.preventDefault()
    setShowAddFriend(!showAddFriend)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={Friends}
          hanldeSelectedFriend={hanldeSelectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            Friends={Friends}
            setFriends={setFriends}
            setShowAddFriend={setShowAddFriend}
          />
        )}
        <Button onClick={handleShowFriend}>
          {!showAddFriend ? "Add friend" : "Close"}
        </Button>
      </div>
      {selectedFriend ? <FormSplitBill friend={selectedFriend} /> : ""}
    </div>
  )
}
function FriendList({ friends, hanldeSelectedFriend }) {
  console.log(friends)
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          hanldeSelectedFriend={hanldeSelectedFriend}
        />
      ))}
    </ul>
  )
}

function Friend({ friend, hanldeSelectedFriend }) {
  return (
    <li>
      <img src={friend.imageURL} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You Need to give {friend.name} {Math.abs(friend.balance)}€
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="green">
          {friend.name} need to give you {Math.abs(friend.balance)}€
        </p>
      )}
      <Button
        onClick={() => {
          hanldeSelectedFriend(friend)
        }}
      >
        Choose
      </Button>
    </li>
  )
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

function FormAddFriend({ Friends, setFriends, setShowAddFriend }) {
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48")

  function handleAddFriend(e) {
    e.preventDefault()

    if (!name || !imageURL) return
    const id = crypto.randomUUID()
    const newFriend = {
      id,
      name,
      imageURL: `${imageURL}?=${id}`,
      balance: 0,
    }
    setFriends([...Friends, newFriend])

    setName("")
    setShowAddFriend(false)
    console.log(newFriend)
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>👬Friend Name</label>
      <input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />

      <label>📷Image URL</label>
      <input
        value={imageURL}
        src={imageURL}
        type="text"
        onChange={(e) => {
          setImageURL(e.target.value)
        }}
      />

      <button className="button">Add</button>
    </form>
  )
}

function FormSplitBill({ friend }) {
  console.log(friend)
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friend.name} </h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧒 Your expense</label>
      <input type="text" />

      <label>👬 {friend.name}'s expense</label>
      <input disabled type="text" />

      <label>🤑 Who is Paying the bill ?</label>
      <select>
        <option>Choose</option>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Spit Bill</Button>
    </form>
  )
}
