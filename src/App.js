import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'
import { useState } from 'react'

function App() {
  const [emails, setEmails] = useState(initialEmails) //  State emails: [initialEmails]
  const [readEmails, setReadEmails] = useState(false) // State readEmails: false
  /* 
    Toggle read

    Input : Targeted Email - Object 
    Action: Imutabily change state key value of object
    Output: nothing

  */

  function toggleRead(targetEmail) {
    const updatedEmails = []
    for (const email of emails) {
      if (email.id === targetEmail.id) {
        updatedEmails.push({ ...email, read: !email.read })
      } else {
        updatedEmails.push(email)
      }
    }
    setEmails(updatedEmails)
  }

  function toggleFav(targetEmail) {
    const updatedEmails = []
    for (const email of emails) {
      if (email.id === targetEmail.id) {
        updatedEmails.push({ ...email, starred: !email.starred })
      } else {
        updatedEmails.push(email)
      }
    }
    setEmails(updatedEmails)
  }

  function filteredEmails() {
    const filteredEmails = []
    for (const email of emails) {
      if (!email.read) {
        filteredEmails.push({ ...email })
      }
    }
    return filteredEmails
  }

  const emailsToRender = readEmails ? filteredEmails() : emails

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
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={readEmails}
              onChange={() => setReadEmails(!readEmails)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emailsToRender.map(email => {
            return (
              <li
                className={email.read ? 'email read' : 'email'}
                key={email.id}
              >
                <input
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                ></input>
                <input
                  type="checkbox"
                  className="star-checkbox"
                  checked={email.starred}
                  onChange={() => toggleFav(email)}
                ></input>
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
