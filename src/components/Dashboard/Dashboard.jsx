import React from 'react'
import Sidebar from '../Dashboard/components/Sidebar Section/Sidebars'
import Body from '../Dashboard/components/Body Section/Body'

import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='dashboard flex'>
      
      <div className="dashboard-container flex">
        <Sidebar/>
        <Body />
      </div>
 
    </div>
  )
}

export default Dashboard