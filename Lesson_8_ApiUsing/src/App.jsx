import { useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    // Post: veri eklemek için kullanılır
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    //Put : veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
  }

  const deleteUser = async (userId) => {
    await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data);
  }



  useEffect(() => {
    deleteUserById("2")
    //getAllUsers();
    //getUserById(1);
    // const newuUser = {
    // "username": "ali",
    // "password": "3636"
    //}
    //createUser(newuUser)

    // updateUser("2", {
    //   "username": "can",
    //   "password": "5555"
    // })

  }, [])


  return (
    <div>

    </div>
  )
}

export default App
