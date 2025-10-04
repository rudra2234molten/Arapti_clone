import React from 'react'
import TextBanner from './TextBanner';
import { NavLink, Outlet } from 'react-router-dom';
import ButtonBlue from './ButtonBlue';

const propertyLinks = [
  { label: 'Flat', path: '' },
  { label: 'Duplex', path: 'duplex' },
  { label: 'Land', path: 'land' },
]

const SelectInput = ({ name, id, option1, option2, option3 }) => {
  return <select name={name} id={id} className='bg-transparent focus:outline-blue-400 border-[#E0E2E9] rounded-md px-3 py-2 text-gray-700 border w-full'>
    <option value={option1}>{option1}</option>
    <option value={option2}>{option2}</option>
    <option value={option3}>{option3}</option>
  </select>
}

const optionData = [
  { id: 'Select Location1', option1: 'Select Locatio1', option2: 'Options', option3: 'Options' },
  { id: 'Select Location2', option1: 'Select Location2', option2: 'Options', option3: 'Options' },
  { id: 'Select Price Rnage', option1: 'Select Price Rnage', option2: 'Options', option3: 'Options' },
]

const PropertyBrowse = () => {
  return (
    <section className='bg-[#FBF7F7] w-full'>
      <TextBanner heading='Properties' />
      <section className='xl:px-20 px-5 my-10 w-full'>
        <div>
          <nav className='flex bg-white rounded-md border-b justify-between sm:justify-normal border-[#E0E2E9] sm:w-fit w-full sm:text-lg text-base shadow-md'>
            {propertyLinks.map(({ label, path }, index) => (
              <NavLink key={index} end={path === ''} to={path} className={({ isActive }) => `${isActive ? 'text-blue-600 font-bold border-b-4 border-blue-500' : 'hover:text-gray-900 text-gray-600'} px-4 py-2 h-full transition-all duration-300`}>{label}</NavLink>
            ))}
          </nav>
          <div className='flex justify-between flex-col sm:flex-row gap-5 items-center w-full p-5 bg-white rounded-md shadow-md'>
            {
              optionData.map(({ id, option1, option2, option3 }) => (
                <SelectInput name={id} id={id} option1={option1} option2={option2} option3={option3} />
              ))
            }
            <ButtonBlue text='Browse Properties' />
          </div>
        </div>
      </section>
      <section className='xl:px-20 px-5 h-auto w-full'>
        <Outlet />
      </section>
    </section>
  )
}

export default PropertyBrowse