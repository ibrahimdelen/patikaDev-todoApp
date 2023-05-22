import React, { useState, useEffect } from 'react'
import  "./styles.css"
import List from '../List'
import Form from '../Form'


function Contacts() {
  const [contacts, setContacts] = useState([
    {   
      fullName:"Hans",
      phone_Number:"539014"
    },
    {
      fullName:"Coni",
      phone_Number:"456241"
    },
    {
      fullName:"Moni",
      phone_Number:"768424"
    },
    {
      fullName:"Hegel",
      phone_Number:"156426"
    },

  ])
  useEffect(() =>{
    console.log(contacts)
  }, [contacts])


  return (
    <div id='container'>
      <h2>Contacts</h2>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;