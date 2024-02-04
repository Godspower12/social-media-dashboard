import React, { useState } from 'react';
import "./Dashboard.css";
import  {Data, Overview}  from '../../Data';
import { Switch } from '@headlessui/react';
import lightIcon from "../../assets/icon-light-theme.svg"
import darkIcon from "../../assets/icon-dark-theme.svg"
import useDarkMode from "../Hooks/useDarkMode"

const Dashboard = () => {

  const [colorTheme, setTheme]= useDarkMode()

    const [darkSide, setDarkSide] =useState(
        colorTheme === 'light' ? true : false
    )

const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked)
}

  return (
    <div className='Dashboard-wrapper dark:bg-[#2b2c37] bg-white '>
      <header>
        <div className="header-right dark:text-white max-md:text-sm">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="header-left">
        
        <div className='mx-2 space-x-2
       flex justify-center items-center rounded-lg'>
    <img src={lightIcon} className='lightIcon' alt="img-icon"/>
    {/* Switch */}
    <Switch 
     checked = {darkSide}
     onChange={toggleDarkMode}
    className={`${darkSide ? 'bg-[#635fc7]'
: 'bg-gray-200'}
relative inline-flex h-6 w-11 
items-center rounded-full`}>

<span
className= {`${darkSide ? 'translate-x-6' 
: 'translate-x-1'}
inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
    </Switch>

    <img src={darkIcon} className='darkIcon' alt='img'/>


      </div>
        </div>
      </header>

<div className="dashboard-contents">
<div className="contents-1">
  {Data.map(item => (
    <div className='card' key={item.id}>
      <div className='card-item bg-wite dark:bg-black dark:text-white'>
      <div className="top-border"></div>
     <div className='title'> 
      <img src= {item.Icon} alt="img-icon"/>
      <p>{item.Name}</p></div>
      <p>{item.Followers}</p>
      <p>FOLLOWERS</p>
      <p><span>{item.view} Today</span></p>
      </div>
    </div>
  ))}
</div>


  <h1 className='overview'>Overview Today</h1>
<div className="contents-2">
{Overview.map(item => (
    <div className='card' key={item.id}>
      <div className='card-item bg-wite dark:bg-black dark:text-white'>
     <div className='title'> 
      <p>{item.Title}</p>
      <img src= {item.Icon} alt="img-icon"/>
      </div>

      <div className="numbers">
      <h1>{item.Number}</h1>
       <p>{item.percentage}</p>
      </div>
    
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  );
}

export default Dashboard;
