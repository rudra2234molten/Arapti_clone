import React from 'react'
import TextBanner from '../TextBanner'
import { contactUsLabel } from '../Footer'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";
import ButtonBlue from '../ButtonBlue';


const ContactUs = () => {
  return (
    <section>
      <TextBanner heading='Contact' last='Us' />
      <section className='xl:px-20 px-5 w-full my-10'>
        <aside className='flex w-full flex-col md:flex-row gap-y-5'>
          <article className='flex-1 flex flex-col gap-y-5'>
            {
              contactUsLabel.map(({ icon, label }, index) => <span key={index} className={`${index === 0 && 'hidden'} items-center font-semibold xl:text-xl sm:text-lg text-sm text-gray-700 flex gap-3`}>{icon && <img src={icon} alt="icon" className='sm:w-10 w-6' />} {label}</span>)
            }
          </article>
          <div className='flex-1 h-80'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0933071395457!2d85.77562897437556!3d20.254964681207724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a782befbdd7b%3A0xb5c213af61368446!2sWeb_Bocket%20Classes%20%2C%20Khandagiri!5e0!3m2!1sen!2sin!4v1758955020506!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
          </div>
        </aside>
        <aside className='w-full p-5 rounded-md bg-gray-100 mt-10 mb-32 md:mb-64'>
          <h1 className='font-semibold sm:text-3xl text-2xl'>Drop Us a Line</h1>
          <p className='sm:text-sm text-xs text-gray-500 py-3'>Your email address will not be published, required field are marked.</p>
          <form method="post" className='flex sm:flex-wrap flex-col sm:flex-row gap-5'>
            <div className='flex sm:w-[calc(50%-10px)] w-full items-center justify-between p-2 rounded-md bg-white border border-gray-200'>
              <input required type="text" name="name" id="name" placeholder='Enter Your Name' className='w-full outline-none focus:outline-none' />
              <span className='text-red-500 text-lg'><FaRegUser /></span>
            </div>
            <div className='flex sm:w-[calc(50%-10px)] w-full items-center justify-between p-2 rounded-md bg-white border border-gray-200'>
              <input required type="text" name="name" id="name" placeholder='Enter Email Address' className='w-full outline-none focus:outline-none' />
              <span className='text-red-500 text-lg'><MdMailOutline /></span>
            </div>
            <div className='flex sm:w-[calc(50%-10px)] w-full items-center justify-between p-2 rounded-md bg-white border border-gray-200'>
              <input required type="text" name="name" id="name" placeholder='Property Type' className='w-full outline-none focus:outline-none' />
              <span className='text-red-500 text-lg'><FaChevronDown /></span>
            </div>
            <div className='flex sm:w-[calc(50%-10px)] w-full items-center justify-between p-2 rounded-md bg-white border border-gray-200'>
              <input required type="text" name="name" id="name" placeholder='Enter Phone Number' className='w-full outline-none focus:outline-none' />
              <span className='text-red-500 text-lg'><IoCall /></span>
            </div>
            <div className='flex w-full items-center col-span-2 justify-between p-2 rounded-md bg-white border border-gray-200'>
              <textarea required name="message" id="message" className='w-full outline-none focus:outline-none' rows={7} placeholder='Enter Your Message'></textarea>
              <span className='text-red-500 text-lg'><SlNote /></span>
            </div>
            <ButtonBlue text='Post a Comment' />
          </form>
        </aside>
      </section>
    </section>
  )
}

export default ContactUs