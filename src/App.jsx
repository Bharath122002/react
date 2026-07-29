import { useState } from "react";
import "./App.css";
function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const handleSend = () => {
    if (message.trim() === "") return;
    const newMessage = {
      text: message,
      time: getTime(),
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  const clearChat = () => {
    setMessages([]);
  };
  return (
    <div className="container">
      <div className="chat-box">
        <div className="chat-header">
          <h1>💬 Mini Chat</h1>
          <h3>Total Messages : {messages.length}</h3>
        </div>
        <div className="messages">
          {messages.length === 0 ? (
            <div className="empty">
              <h2>👋 Welcome!</h2>
              <p>Start a conversation by typing a message below.</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div className="message" key={index}>
                <strong>👤 You</strong>

                <p>{msg.text}</p>

                <small>{msg.time}</small>
              </div>
            ))
          )}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend}>
            ➤ Send
          </button>
          <button onClick={clearChat} style={{ background: "#ef4444", }} >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//     dob: "",
//     gender: "",
//     address: "",
//     city: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.firstName.trim())
//       newErrors.firstName = "First Name is required";

//     if (!formData.lastName.trim())
//       newErrors.lastName = "Last Name is required";

//     if (!formData.email)
//       newErrors.email = "Email is required";
//     else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     )
//       newErrors.email = "Invalid Email Address";

//     if (!formData.mobile)
//       newErrors.mobile = "Mobile Number is required";
//     else if (!/^[0-9]{10}$/.test(formData.mobile))
//       newErrors.mobile = "Enter a valid 10-digit mobile number";

//     if (!formData.password)
//       newErrors.password = "Password is required";
//     else if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     if (!formData.confirmPassword)
//       newErrors.confirmPassword = "Confirm Password is required";
//     else if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     if (!formData.dob)
//       newErrors.dob = "Date of Birth is required";

//     if (!formData.gender)
//       newErrors.gender = "Please select Gender";

//     if (!formData.address.trim())
//       newErrors.address = "Address is required";

//     if (!formData.city.trim())
//       newErrors.city = "City is required";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       alert("Registration Successful!");

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//         password: "",
//         confirmPassword: "",
//         dob: "",
//         gender: "",
//         address: "",
//         city: "",
//       });

//       setErrors({});
//     }
//   };

//   return (
//     <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//         <h1>Registration Form</h1>
//         <p className="subtitle">
//           Create your account by filling in the details below
//         </p>

//         <div className="form-grid">
//           <div className="form-group">
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Enter First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.firstName}</span>
//           </div>

//           <div className="form-group">
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Enter Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.lastName}</span>
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.email}</span>
//           </div>

//           <div className="form-group">
//             <label>Mobile Number</label>
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Enter Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.mobile}</span>
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.password}</span>
//           </div>

//           <div className="form-group">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.confirmPassword}</span>
//           </div>

//           <div className="form-group">
//             <label>Date of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.dob}</span>
//           </div>

//           <div className="form-group">
//             <label>City</label>
//             <input
//               type="text"
//               name="city"
//               placeholder="Enter City"
//               value={formData.city}
//               onChange={handleChange}
//             />
//             <span className="error">{errors.city}</span>
//           </div>

//           <div className="form-group full">
//             <label>Gender</label>

//             <div className="gender">
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === "Male"}
//                   onChange={handleChange}
//                 />
//                 Male
//               </label>

//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === "Female"}
//                   onChange={handleChange}
//                 />
//                 Female
//               </label>
//             </div>

//             <span className="error">{errors.gender}</span>
//           </div>

//           <div className="form-group full">
//             <label>Address</label>
//             <textarea
//               name="address"
//               placeholder="Enter Address"
//               value={formData.address}
//               onChange={handleChange}
//             ></textarea>
//             <span className="error">{errors.address}</span>
//           </div>

//           <div className="form-group full">
//             <button type="submit">Create Account</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [theme, settheme] = useState(false);
//   return (
//     <div className={theme ? "dark" : "light"}>
//       <div className="container">
//         <h1>React Theme Toggle</h1>
//         <h2><b>{theme ? "Please Login" : "Welcome Back!"}</b></h2>
//         <h3>Current Theme :{theme ? " Dark Theme" : " Light Theme"} </h3>
//         <button onClick={() => settheme(!theme)}>
//           {theme ? "Light Mode" : "Dark Mode"}</button>
//       </div>
//     </div>
//   );
// }


// import React from 'react'
// import Child from './child.jsx'
// import './App.css'
// import Login from "./Login.jsx";
// export default function App() {

//   const name1 = "Gahani Bharath Teja";
//   const age1 = 23;
//   const city1 = "Hyderabad";
//   const mobile1 = "9876543210";
//   const email1 = "Bharath@gmail.com";
//   const occupation1 = "Software Engineer";
//   const address1 = "Hyderabad";

//   const name2 = "Ajay Kumar";
//   const age2 = 24;
//   const city2 = "karimnagar";
//   const mobile2 = "9876543210";
//   const email2 = "Ajay@gmail.com";
//   const occupation2 = "Software Developer";
//   const address2 = "Hyderabad";

//   const name3 = "Prashanth";
//   const age3 = 22;
//   const city3 = "karnool";
//   const mobile3 = "9876543210";
//   const email3 = "prashanth@gmail.com";
//   const occupation3 = "Software Teasting";
//   const address3 = "Hyderabad";

//   const name4 = "Teja";
//   const age4 = 22;
//   const city4 = "Mahabubnagar";
//   const mobile4 = "9876543210";
//   const email4 = "Teja@gmail.com";
//   const occupation4 = "System Designer";
//   const address4 = "Hyderabad";

//   const name5 = "Aditya";
//   const age5 = 25;
//   const city5 = "Shadnagar";
//   const mobile5 = "9876543210";
//   const email5 = "Aditya@gmail.com";
//   const occupation5 = "Cloud Engineer";
//   const address5 = "Hyderabad";

//   return (
//     <div className="container">
//        <Login />
//       <h1 className='title'>User Details</h1>
//     <div className='child-container'>
//        <Child name={name1} age={age1} city={city1} mobile={mobile1} email={email1} occupation={occupation1} address={address1}/>
//        <Child name={name2} age={age2} city={city2} mobile={mobile2} email={email2} occupation={occupation2} address={address2}/>
//        <Child name={name3} age={age3} city={city3} mobile={mobile3} email={email3} occupation={occupation3} address={address3}/>
//        <Child name={name4} age={age4} city={city4} mobile={mobile4} email={email4} occupation={occupation4} address={address4}/>
//        <Child name={name5} age={age5} city={city5} mobile={mobile5} email={email5} occupation={occupation5} address={address5}/>
//     </div>
           
//       </div>
//   )
// }
// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const users = [
//     {
//       name: "Gahani Bharath Teja",
//       age: 23,
//       city: "Hyderabad",
//       email: "bharath@gmail.com",
//       occupation: "Software Engineer",
//     },
//     {
//       name: "Ajay Kumar",
//       age: 24,
//       city: "Karimnagar",
//       email: "ajay@gmail.com",
//       occupation: "Software Developer",
//     },
//     {
//       name: "Prashanth",
//       age: 22,
//       city: "Kurnool",
//       email: "prashanth@gmail.com",
//       occupation: "Software Tester",
//     },
//     {
//       name: "Teja",
//       age: 22,
//       city: "Mahabubnagar",
//       email: "teja@gmail.com",
//       occupation: "System Designer",
//     },
//     {
//       name: "Aditya",
//       age: 25,
//       city: "Shadnagar",
//       email: "aditya@gmail.com",
//       occupation: "Cloud Engineer",
//     },
//   ];
//   return (

//     <div className="container">
//      <div className="counter">
//   <h1 className="counter-title">React Counter</h1>
//   <h2 className="counter-value">{count}</h2>
//   <div className="buttons">
//     <button onClick={() => setCount(count + 1)}> + Increment</button>
//     <button onClick={() => setCount(count - 1)}>- Decrement  </button>
//     <button onClick={() => setCount(0)}> Reset</button>
//   </div>
// </div>
//       <h1 className="title">User Details</h1>
//       <div className="card-container">
//         {users.map((user, index) => (
//           <div className="card" key={index}>
//             <h2>{user.name}</h2>
//             <p><b>Age:</b> {user.age}</p>
//             <p><b>City:</b> {user.city}</p>
//             <p><b>Email:</b> {user.email}</p>
//             <p><b>Occupation:</b> {user.occupation}</p>
//           </div> ))}
//       </div>
//     </div>
//   );
// }
