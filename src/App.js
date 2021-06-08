import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'
import { useState } from 'react'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails)
  const [hideReadEmails, setHideReadEmails] = useState(false)

  const toggleEmail = email => {
    setEmails(
      emails.map(thingsToChange => {
        if (thingsToChange.id === email.id) {
          return { ...email, read: !email.read }
        } else {
          return thingsToChange
        }
      })
    )
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              // Checked get value from state
              checked={hideReadEmails}
              // On change uses event listiner, that updates the state
              onChange={event => {
                setHideReadEmails(event.target.checked)
              }}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => {
            return (
              <li className="email">
                <input
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleEmail(email)}
                ></input>
                <img className="star-checkbox"></img>
                <h3 className="title">{email.sender}</h3>
                <h3 className="title">{email.title}</h3>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
