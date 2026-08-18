import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Cars from "./components/Cars";
import Bikes from "./components/Bikes";
import Laptops from "./components/Laptops";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          P-Hub
        </div>

        <div className="nav-links">

          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </div>

      </nav>


      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />


        {/* Products + Nested Routes */}
        <Route
          path="/products"
          element={<Products />}
        >

          <Route
            path="cars"
            element={<Cars />}
          />

          <Route
            path="bikes"
            element={<Bikes />}
          />

          <Route
            path="laptops"
            element={<Laptops />}
          />

        </Route>


        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

// import { useEffect, useReducer, useState } from "react";
// import "./App.css";

// const initialCart = [];

// function cartReducer(cart, action) {
//   switch (action.type) {
//     case "add": {
//       const existingItem = cart.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existingItem) {
//         return cart.map((item) =>
//           item.id === action.payload.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//               }
//             : item
//         );
//       }

//       return [
//         ...cart,
//         {
//           ...action.payload,
//           quantity: 1,
//         },
//       ];
//     }

//     case "remove":
//       return cart.filter(
//         (item) => item.id !== action.payload
//       );

//     case "increase":
//       return cart.map((item) =>
//         item.id === action.payload
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );

//     case "decrease":
//       return cart
//         .map((item) =>
//           item.id === action.payload
//             ? {
//                 ...item,
//                 quantity: item.quantity - 1,
//               }
//             : item
//         )
//         .filter((item) => item.quantity > 0);

//     case "clear":
//       return [];

//     default:
//       return cart;
//   }
// }

// function App() {
//   const [cart, dispatch] = useReducer(
//     cartReducer,
//     initialCart
//   );

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] =
//     useState("all");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError(
//           "Unable to load products. Please try again."
//         );
//         setLoading(false);
//       });
//   }, []);

//   const categories = [
//     "all",
//     ...new Set(products.map((product) => product.category)),
//   ];

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "all" ||
//       product.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   const totalItems = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const subtotal = cart.reduce(
//     (total, item) =>
//       total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="app">

//       {/* Header */}

//       <header className="header">

//         <div className="brand">

//           <div className="brand-icon">
//             BT
//           </div>

//           <div>
//             <h1>FIND YOUR NEEDS</h1>
            
//           </div>

//         </div>

//         <div className="header-cart">

//           <span>🛒</span>

//           <div>
//             <strong>{totalItems} Items</strong>

//             <strong>
//               ${subtotal.toFixed(2)}
//             </strong>
//           </div>

//         </div>

//       </header>

//       {/* Main */}

//       <main className="main-content">

//         {/* Left Side */}

//         <div className="left-column">

//           <section className="products-card">

//             <div className="section-heading">

//               <div className="heading-icon">
//                 🛍️
//               </div>

//               <div>
//                 <h2>Our Products</h2>
//                 <p>
//                   Choose your favorite products
//                 </p>
//               </div>

//             </div>

//             {/* Search and Filter */}

//             <div className="filters">

//               <div className="search-box">

//                 <span>🔍</span>

//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={searchTerm}
//                   onChange={(event) =>
//                     setSearchTerm(event.target.value)
//                   }
//                 />

//               </div>

//               <select
//                 value={selectedCategory}
//                 onChange={(event) =>
//                   setSelectedCategory(event.target.value)
//                 }
//               >
//                 {categories.map((category) => (
//                   <option
//                     key={category}
//                     value={category}
//                   >
//                     {category === "all"
//                       ? "All Categories"
//                       : category}
//                   </option>
//                 ))}
//               </select>

//             </div>

//             {/* Loading */}

//             {loading && (
//               <div className="loading">

//                 <div className="spinner"></div>

//                 <h3>Loading Products...</h3>

//                 <p>
//                   Fetching products from API
//                 </p>

//               </div>
//             )}

//             {/* Error */}

//             {error && (
//               <div className="error">

//                 <div>⚠️</div>

//                 <h3>Something went wrong</h3>

//                 <p>{error}</p>

//               </div>
//             )}

//             {/* Products */}

//             {!loading &&
//               !error &&
//               filteredProducts.length > 0 && (

//                 <div className="product-grid">

//                   {filteredProducts.map((product) => (

//                     <div
//                       className="product-card"
//                       key={product.id}
//                     >

//                       <div className="product-image">

//                         <img
//                           src={product.image}
//                           alt={product.title}
//                         />

//                       </div>

//                       <div className="product-category">
//                         {product.category}
//                       </div>

//                       <h3>
//                         {product.title}
//                       </h3>

//                       <div className="rating">
//                         ⭐ {product.rating.rate}
//                         <span>
//                           ({product.rating.count})
//                         </span>
//                       </div>

//                       <div className="product-price">
//                         ${product.price.toFixed(2)}
//                       </div>

//                       <button
//                         className="add-button"
//                         onClick={() =>
//                           dispatch({
//                             type: "add",
//                             payload: product,
//                           })
//                         }
//                       >
//                         🛒 Add to Cart
//                       </button>

//                     </div>

//                   ))}

//                 </div>

//               )}

//             {/* No Products */}

//             {!loading &&
//               !error &&
//               filteredProducts.length === 0 && (

//                 <div className="no-products">

//                   <div>🔎</div>

//                   <h3>
//                     No products found
//                   </h3>

//                   <p>
//                     Try another search or category.
//                   </p>

//                 </div>

//               )}

//           </section>

//           {/* Benefits */}

//           <section className="benefits">

//             <div className="benefit">

//               <div className="benefit-icon purple-bg">
//                 🛡️
//               </div>

//               <div>
//                 <strong>
//                   Secure Checkout
//                 </strong>

//                 <p>
//                   100% secure payments
//                 </p>
//               </div>

//             </div>

//             <div className="benefit">

//               <div className="benefit-icon green-bg">
//                 🚚
//               </div>

//               <div>
//                 <strong>
//                   Free Delivery
//                 </strong>

//                 <p>
//                   Fast & reliable delivery
//                 </p>
//               </div>

//             </div>

//             <div className="benefit">

//               <div className="benefit-icon orange-bg">
//                 🏆
//               </div>

//               <div>
//                 <strong>
//                   Best Quality
//                 </strong>

//                 <p>
//                   Premium products
//                 </p>
//               </div>

//             </div>

//             <div className="benefit">

//               <div className="benefit-icon pink-bg">
//                 🎧
//               </div>

//               <div>
//                 <strong>
//                   24/7 Support
//                 </strong>

//                 <p>
//                   Always here to help
//                 </p>
//               </div>

//             </div>

//           </section>

//         </div>

//         {/* Right Side - Cart */}

//         <section className="cart-card">

//           <div className="cart-heading">

//             <div className="cart-title">

//               <div className="cart-heading-icon">
//                 🛒
//               </div>

//               <div>
//                 <h2>Your Cart</h2>

//                 <p>
//                   {totalItems} items selected
//                 </p>
//               </div>

//             </div>

//             {cart.length > 0 && (

//               <button
//                 className="clear-button"
//                 onClick={() =>
//                   dispatch({
//                     type: "clear",
//                   })
//                 }
//               >
//                 🗑️ Clear
//               </button>

//             )}

//           </div>

//           <div className="divider"></div>

//           {/* Empty Cart */}

//           {cart.length === 0 ? (

//             <div className="empty-cart">

//               <div className="empty-icon">
//                 🛒
//               </div>

//               <h3>
//                 Your cart is empty
//               </h3>

//               <p>
//                 Add some products to get started!
//               </p>

//             </div>

//           ) : (

//             <div className="cart-items">

//               {cart.map((item) => (

//                 <div
//                   className="cart-item"
//                   key={item.id}
//                 >

//                   <div className="cart-item-info">

//                     <div className="cart-item-image">

//                       <img
//                         src={item.image}
//                         alt={item.title}
//                       />

//                     </div>

//                     <div>

//                       <h3>
//                         {item.title}
//                       </h3>

//                       <p>
//                         ${item.price.toFixed(2)} each
//                       </p>

//                     </div>

//                   </div>

//                   {/* Quantity */}

//                   <div className="quantity">

//                     <button
//                       onClick={() =>
//                         dispatch({
//                           type: "decrease",
//                           payload: item.id,
//                         })
//                       }
//                     >
//                       −
//                     </button>

//                     <strong>
//                       {item.quantity}
//                     </strong>

//                     <button
//                       onClick={() =>
//                         dispatch({
//                           type: "increase",
//                           payload: item.id,
//                         })
//                       }
//                     >
//                       +
//                     </button>

//                   </div>

//                   {/* Item total */}

//                   <strong className="item-price">

//                     $
//                     {(
//                       item.price *
//                       item.quantity
//                     ).toFixed(2)}

//                   </strong>

//                   {/* Remove */}

//                   <button
//                     className="delete-button"
//                     onClick={() =>
//                       dispatch({
//                         type: "remove",
//                         payload: item.id,
//                       })
//                     }
//                   >
//                     🗑️
//                   </button>

//                 </div>

//               ))}

//             </div>

//           )}

//           {/* Summary */}

//           <div className="summary">

//             <div className="summary-row">

//               <div>

//                 <span className="summary-icon purple-bg">
//                   🛍️
//                 </span>

//                 <span>
//                   Total Items
//                 </span>

//               </div>

//               <strong>
//                 {totalItems}
//               </strong>

//             </div>

//             <div className="summary-row">

//               <div>

//                 <span className="summary-icon green-bg">
//                   $
//                 </span>

//                 <span>
//                   Subtotal
//                 </span>

//               </div>

//               <strong>
//                 ${subtotal.toFixed(2)}
//               </strong>

//             </div>

//             <div className="summary-total">

//               <span>
//                 Total Amount
//               </span>

//               <strong>
//                 ${subtotal.toFixed(2)}
//               </strong>

//             </div>

//           </div>

//           <button
//             className="checkout-button"
//             disabled={cart.length === 0}
//           >
//             🛍️ Proceed to Checkout
//           </button>

//         </section>

//       </main>

//       <footer>
//         © 2026 Shopping Cart App · Built with React
//         useReducer 💜
//       </footer>

//     </div>
//   );
// }

// export default App;
// import {
//   useState,
//   useEffect,
//   useRef,
//   useContext,
//   createContext,
// } from "react";

// import "./App.css";

// const UserContext = createContext();

// function Profile() {
//   const message = useContext(UserContext);

//   return (
//     <div className="context-message">
//       {message}
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const [submittedName, setSubmittedName] = useState("");
//   const [submittedEmail, setSubmittedEmail] = useState("");

//   const nameInputRef = useRef(null);

//   useEffect(() => {
//     console.log("Welcome User");

//     nameInputRef.current.focus();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setSubmittedName(name);
//     setSubmittedEmail(email);
//   };

//   return (
//     <UserContext.Provider value="Welcome to User Profile">
//       <div className="container">

//         <div className="profile-card">

//           <div className="header">
//             <div className="profile-icon">👤</div>

//             <h1>User Profile</h1>

//             <p>Create your profile</p>
//           </div>

//           <Profile />

//           <form onSubmit={handleSubmit}>

//             <div className="input-group">
//               <label>User Name</label>

//               <input
//                 ref={nameInputRef}
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//               />
//             </div>

//             <div className="input-group">
//               <label>Email</label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//             </div>

//             <button type="submit">
//               Submit Profile
//             </button>

//           </form>

//           {submittedName && submittedEmail && (
//             <div className="submitted-profile">

//               <h2>Profile Details</h2>

//               <div className="detail">
//                 <span>User Name</span>
//                 <strong>{submittedName}</strong>
//               </div>

//               <div className="detail">
//                 <span>Email</span>
//                 <strong>{submittedEmail}</strong>
//               </div>
               
//             </div>
//           )}

//         </div>

//       </div>
//     </UserContext.Provider>
//   );
// }

// export default App;
// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const [currentValue, setCurrentValue] = useState(0);
//   const [inputValue, setInputValue] = useState("");

//   const previousValue = useRef(0);

//   const handleUpdate = () => {
//     if (inputValue.trim() === "") {
//       return;
//     }

//     previousValue.current = currentValue;
//     setCurrentValue(Number(inputValue));
//     setInputValue("");
//   };

//   const handleReset = () => {
//     previousValue.current = 0;
//     setCurrentValue(0);
//     setInputValue("");
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Number Tracker</h1>

//         <p className="subtitle">
          
//         </p>

//         <div className="input-section">
//           <input
//             type="number"
//             placeholder="Enter a number"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />

//           <button className="update-btn" onClick={handleUpdate}>
//             Update
//           </button>

//           <button className="reset-btn" onClick={handleReset}>
//             Reset
//           </button>
//         </div>

//         <div className="values">
//           <div className="value-card current">
//             <span>Current Value</span>
//             <strong>{currentValue}</strong>
//           </div>

//           <div className="value-card previous">
//             <span>Previous Value</span>
//             <strong>{previousValue.current}</strong>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Something went wrong while fetching users.");
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>👥 User Directory</h1>
//         <p>Users fetched from JSONPlaceholder API</p>
//       </div>

//       {loading && (
//         <div className="loading">
//           <div className="spinner"></div>
//           <h2>Loading...</h2>
//           <p>Fetching user data</p>
//         </div>
//       )}

//       {error && (
//         <div className="error">
//           <h2>⚠️ Error</h2>
//           <p>{error}</p>
//         </div>
//       )}

//       {!loading && !error && (
//         <div className="user-grid">
//           {users.map((user) => (
//             <div className="user-card" key={user.id}>
//               <div className="avatar">
//                 {user.name.charAt(0)}
//               </div>

//               <div className="user-info">
//                 <h2>{user.name}</h2>

//                 <p>
//                   <span></span>
//                   {user.email}
//                 </p>

//                 <p>
//                   <span></span>
//                   {user.phone}
//                 </p>

//                 <p>
//                   <span></span>
//                   {user.address.city}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [time, setTime] = useState(10);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isRunning && time > 0) {
//       interval = setInterval(() => {
//         setTime((previousTime) => previousTime - 1);
//       }, 1000);
//     }

//     if (time === 0) {
//       setIsRunning(false);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isRunning, time]);

//   const startTimer = () => {
//     setIsRunning(true);
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     setTime(10);
//   };

//   return (
//     <div className="container">
//       <div className="countdown-card">
//         <h1>⏳ Countdown Timer</h1>

//         <div className="timer">
//           {time > 0 ? (
//             <h2>Time Remaining: {time}s</h2>
//           ) : (
//             <h2 className="time-up">Time's Up!</h2>
//           )}
//         </div>

//         <div className="buttons">
//           <button
//             className="start-btn"
//             onClick={startTimer}
//             disabled={isRunning || time === 0}
//           >
//             Start Timer
//           </button>

//           <button
//             className="reset-btn"
//             onClick={resetTimer}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (running) {
//       interval = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [running]);

//   const startTimer = () => {
//     setRunning(true);
//   };

//   const stopTimer = () => {
//     setRunning(false);
//   };

//   const resetTimer = () => {
//     setRunning(false);
//     setSeconds(0);
//   };

//   const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");

//   const minutes = String(
//     Math.floor((seconds % 3600) / 60)
//   ).padStart(2, "0");

//   const secs = String(seconds % 60).padStart(2, "0");

//   return (
//     <div className="container">

//       <div className="stopwatch">

//         <h1>⏱ Stopwatch</h1>

//         <div className="status">
//           {running ? "🟢 Running" : "🔴 Stopped"}
//         </div>

//         <div className="timer">
//           {hours} : {minutes} : {secs}
//         </div>

//         <div className="buttons">

//           <button
//             className="start"
//             onClick={startTimer}
//           >
//             Start
//           </button>

//           <button
//             className="stop"
//             onClick={stopTimer}
//           >
//             Stop
//           </button>

//           <button
//             className="reset"
//             onClick={resetTimer}
//           >
//             Reset
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const getTime = () => {
//     return new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };
//   const handleSend = () => {
//     if (message.trim() === "") return;
//     const newMessage = {
//       text: message,
//       time: getTime(),
//     };
//     setMessages([...messages, newMessage]);
//     setMessage("");
//   };
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };
//   const clearChat = () => {
//     setMessages([]);
//   };
//   return (
//     <div className="container">
//       <div className="chat-box">
//         <div className="chat-header">
//           <h1>💬 Mini Chat</h1>
//           <h3>Total Messages : {messages.length}</h3>
//         </div>
//         <div className="messages">
//           {messages.length === 0 ? (
//             <div className="empty">
//               <h2>👋 Welcome!</h2>
//               <p>Start a conversation by typing a message below.</p>
//             </div>
//           ) : (
//             messages.map((msg, index) => (
//               <div className="message" key={index}>
//                 <strong>👤 You</strong>

//                 <p>{msg.text}</p>

//                 <small>{msg.time}</small>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="input-area">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//           <button onClick={handleSend}>
//             ➤ Send
//           </button>
//           <button onClick={clearChat} style={{ background: "#ef4444", }} >
//             Clear
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
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
