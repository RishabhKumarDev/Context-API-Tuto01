🧠 Mental Model

| Step | Concept                 | Code / Tool                        |
| ---- | ----------------------- | ---------------------------------- |
| 1    | Create context          | `createContext()`                  |
| 2    | Build provider          | `<MyContext.Provider>`             |
| 3    | Wrap application        | `<MyProvider><App /></MyProvider>` |
| 4    | Use context in children | `useContext(MyContext)`            |




# 📘 React Context API — Flow & Understanding

This document explains the flow and structure of using the **React Context API** in a clean and organized way. It serves as a personal reference to understand how context is created, provided, and consumed in a React application.

---

## 🧠 What is Context API?

React Context API is used to manage and share state across components **without having to pass props manually** through every level of the component tree. It's ideal for globally used data like themes, authentication, user info, etc.

---

## 🛠️ Full Flow Breakdown

### 1. Create the Context File

Create a new file (e.g., `MyContext.js`) and define your context using `createContext`. Export the variable that holds the context instance.

```js
// MyContext.js
import { createContext } from 'react';

export const MyContext = createContext();


2. Create the Provider Component
Create another file (or use the same one) where you define a provider component that wraps around MyContext.Provider. This provider will handle any shared state and pass it down using the value prop.
// MyProvider.js
import { useState } from 'react';
import { MyContext } from './MyContext';

const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

💡 children is a special prop that allows the provider to wrap all the components that should have access to the context.

3. Wrap Your App with the Provider
In your entry point (main.jsx or App.js), wrap your entire app (or the subtree that needs access) with the MyProvider.
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyProvider from './MyProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>
);

4. Consume the Context in Any Component
In any component that needs access to the shared data, import useContext and the context you created

// SomeComponent.js
import { useContext } from 'react';
import { MyContext } from './MyContext';

const SomeComponent = () => {
  const { user, setUser } = useContext(MyContext);

  return (
    <div>
      <h1>Hello, {user ? user.name : 'Guest'}</h1>
      <button onClick={() => setUser({ name: 'John' })}>Login as John</button>
    </div>
  );
};

export default SomeComponent;


# 🔄 Summary of Flow
Create context using createContext() and export it.

Create a provider component that wraps children with .Provider and provides shared data.

Wrap your app or subtree with the provider in the main/root file.

Use useContext() inside any child component to access the shared data.


##📌 Notes
When calling useContext(MyContext), you're telling React to fetch data from that specific context.

The value prop in .Provider defines what data the context provides to its children.

You can destructure values from useContext(...) just like from a regular object.

