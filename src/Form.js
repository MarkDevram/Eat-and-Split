import React from "react"

function Form() {
  return (
    <div>
      <form onSubmit={3} className="form-split-bill">
        <h2>SPLIT A BILL WITH SARAH</h2>
        <label>💰 Bill value</label>
        <input />
        <label>🧍‍♀️ Your expense</label>
        <input />
        <label>👫 Sarah's expense</label>
        <input disabled />
        <label>🤑 Who is paying the bill</label>
        <select>
          <option>You</option>
          <option>Sarah</option>
        </select>
        <button className="button">Split bill</button>
      </form>
    </div>
  )
}

export default Form
