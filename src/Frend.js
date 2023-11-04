import React from "react"
import { useState } from "react"

function Frend({ data }) {
  const [selected, setSelected] = useState(false)

  return (
    <li>
      <h3>{data.name}</h3>
      <img className="img" src={data.image} alt="broken img" />
      {data.balance > 0 ? (
        <p className="green">
          {data.name} owes you Rs.{data.balance}/-
        </p>
      ) : data.balance === 0 ? (
        <p>You and {data.name} is even</p>
      ) : (
        <p className="red">
          You owe {data.name} Rs.{data.balance}/-
        </p>
      )}
      <button
        className="button"
        onClick={() => {
          setSelected(!selected)
        }}
      >
        Select
      </button>
    </li>
  )
}

export default Frend
