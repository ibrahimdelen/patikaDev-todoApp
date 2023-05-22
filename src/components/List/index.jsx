import {useState} from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState('')
  
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    )
  })

  console.log("filtered", filtered)
  return (
    <div>
      <input placeholder="Filter Contact" value={filterText} 
      onChange={(e) => setFilterText(e.target.value)} />
      <ul className='list'>
        {
          filtered.map((contact,i) =>
           <li key={i}>
            <span>{contact.fullName}</span>
            <span>{contact.phone_Number}</span>
           </li>)
        }
      </ul>
      <div className='number'>All Contact({contacts.length})
      </div>
    </div>
  )
}

export default List