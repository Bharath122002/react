import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [theme, settheme] = useState(false);
  return (
    <div className={theme ? "dark" : "light"}>
      <div className="container">
        <h1>React Theme Toggle</h1>
        <h2><b>{theme ? "Please Login" : "Welcome Back!"}</b></h2>
        <h3>Current Theme :{theme ? " Dark Theme" : " Light Theme"} </h3>
        <button onClick={() => settheme(!theme)}>
          {theme ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
      </div>
    </div>
  );
}


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
