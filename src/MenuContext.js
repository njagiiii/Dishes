import React, { useState, useEffect, createContext, useContext } from "react";

//Create our context
const Menu = createContext();

//Creation of a custom hook to use the context
export const MenuData = () => useContext(Menu);

function MenuContext({ children }) {
  const [data, setData] = useState({});

  function fetchData () {
    fetch ('https://dishes-snyh.onrender.com/menu')
    .then((res) => res.json())
    .then((data) => setData(data))
  }

  useEffect (() => {
    fetchData();
  }, [])

  return <Menu.Provider value={data}> {children} </Menu.Provider>;
}

export default MenuContext;
