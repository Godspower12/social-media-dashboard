import React, { useState } from 'react';
import "./Dashboard.css";
import  {Data, Overview}  from '../../Data';
import { Switch } from '@headlessui/react';
import lightIcon from "../../assets/icon-light-theme.svg"
import darkIcon from "../../assets/icon-dark-theme.svg"
import useDarkMode from "../Hooks/useDarkMode"
import { FaCaretUp, FaCaretDown} from "react-icons/fa"

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
    <div className='Dashboard-wrapper dark:bg-wite darkMode-bg '>
      <header className='dark:bg-header max-md: flex max-md:flex-col max-md: gap-2'>
        <div className="header-right darkMode-text max-md:text-sm">
          <h1 className='dark:text-black font-bold'>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="header-left  w-100 ">
        
        <div className='mx-2 space-x-2 max-md:w-full max-md:justify-between
       flex justify-center items-center rounded-lg'>
    <p className='darkMode-text dark:text-black font-bold'>Dark Mode</p>
    {/* Switch */}
    <Switch 
     checked = {darkSide}
     onChange={toggleDarkMode}
    className={`${darkSide ? 'bg-[#635fc7]'
: 'darkMode-switch'}
relative inline-flex h-6 w-11 
items-center rounded-full`}>

<span
className= {`${darkSide ? 'translate-x-6' 
: 'translate-x-1'}
inline-block h-4 w-4 transform rounded-full darkMode-switch-btn transition`}/>
    </Switch>

   


      </div>
        </div>
      </header>

<div className="dashboard-contents">
<div className="contents-1">
  {Data.map(item => (
    <div className='card' key={item.id}>
      <div className='card-item darkMode-card dark:bg-cardLight dark:hover:bg-cardLight-hover
       darkMode-text rounded-lg overflow-x-hidden'>
         <div className={`top-border h-1 top-0px w-full bg-blue-500 ${item.id === 4 && "top-border h-1 top-0px w-full youtube"} 
         ${item.id === 3 && "top-border h-1 top-0px w-full grad"}`}></div>
     <div className='title mt-2'> 
      <img src= {item.Icon} alt="img-icon"/>
      <p className='text-color pl-1 '>{item.Name}</p></div>
      <h1 className='followers text-[3rem] font-bold mt-3 dark:text-black'>{item.Followers}</h1>
      <p className='mb-5 -mt-3 text-color letter'>FOLLOWERS</p>
      <p className= {`mb-4 flex items-center green-border font-bold justify-center`}>
        {item.id < 4 ?  <FaCaretUp /> : <FaCaretDown  className='text-red-600'/>}<span className={`${item.id > 3 && "youtube-text"}`}> {item.view} Today</span></p>
      </div>
    </div>
  ))} 
</div> 

  <h1 className='overview text-[1.5rem] text-white dark:text-black'>Overview-Today</h1>
<div className="contents-2">
{Overview.map(item => (
    <div className='card ' key={item.id}>
      <div className='card-item darkMode-card
       darkMode-text dark:text-white rounded-lg dark:bg-cardLight dark:hover:bg-cardLight-hover'>
     <div className='title'> 
      <p className='text-color'>{item.Title}</p>
      <img src= {item.Icon} alt="img-icon"/>
      </div>

      <div className="numbers">
      <h1 className='dark:text-black'>{item.Number}</h1>
       <p className={` ${item.id === 2 || item.id === 7 || item.id === 8 ? "youtube-text": "green-border"}`}>
       {item.id === 2 || item.id === 7 || item.id === 8 ? <FaCaretDown  className='text-red-600'/>  : <FaCaretUp /> }
        <span>
         {item.percentage}
        </span>
         
         </p>

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
