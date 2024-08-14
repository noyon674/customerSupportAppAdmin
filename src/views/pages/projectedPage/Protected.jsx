import React from 'react'
import Login from '../login/Login'
import { useSelector } from 'react-redux'

export default function Protected({ children }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  return isAuthenticated ? children : <Login />
}
