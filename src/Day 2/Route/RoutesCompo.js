import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import About from './About'
import Dynamic from './Dynamic'

function RoutesCompo() {
  return (
    <>
    
        <Link to='/'>Home</Link>
        <Link to='/student' >Student</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/about' >About</Link>
            <br /> <br />
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "red"})}  to='/'>Home | </NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "red"})} to='/student'>| Student | </NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "red"})} to='/about'>| About | </NavLink>
        {/* <NavLink style={({isActive}) => ({color: isActive ? "green" : "red"})} to='/contact'> | contact</NavLink> */}
        <NavLink style={({isActive}) => console.log(isActive)} to='/contact'> | contact</NavLink>
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/student' element= {<Student />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/dynamic/:name' element= {<Dynamic />}/>
        </Routes>
    </>
  )
}

export default RoutesCompo
