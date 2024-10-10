import React, {useState} from 'react'
const UserForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const [submittedData, setSubmittedData]=useState(null);

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData({
        ...formData, [name]: value
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmittedData(formData);
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>
                <input type="text" name='name'
                 value={formData.name}
                 onChange={handleChange}
                ></input>
            </div>
            <div>
                <label>Mail :</label>
                <input type="text" name='email'
                 value={formData.email}
                 onChange={handleChange}
                ></input>
            </div>
            <div>
                <label>Age :</label>
                <input type="number" name='age'
                 value={formData.age}
                 onChange={handleChange}
                ></input>
            </div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form> 
        {submittedData && (
            <>
            <h2>Input Data</h2>
            <p>Name : {submittedData.name}</p>
            <p>Email : {submittedData.email}</p>
            <p>Age : {submittedData.age}</p>
            </>
        )}
     
      
    </div>
  )
}

export default UserForm
