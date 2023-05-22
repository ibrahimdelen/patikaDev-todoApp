import { useState, useEffect} from "react";

const initialFormValues = {fullName: "", phone_Number:""}

function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues)
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
    if (form.fullName === "" || form.phone_Number === "") {
      return false
    }

    addContact([...contacts, form])

    setForm(initialFormValues )

  }

  

  return (
    <form onSubmit={onSubmit}  >
      <div>
        <input name="fullName" placeholder='Name' onChange={onChangeInput} />
      </div>

      <div>
        <input name='phone_Number' placeholder='Number' onChange={onChangeInput}/>
      </div>

      <div className="add">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default Form