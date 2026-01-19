'use client'
import React from 'react'

const ContactInfo = () => {
  // Function to handle email click
  const handleEmailClick = () => {
    window.location.href = 'mailto:rachealaberr@gmail.com'
  }

  // Function to handle phone click
  const handlePhoneClick = () => {
    window.location.href = 'tel:+256787635823'
  }

  // Function to open Instagram
  const handleInstagramClick = () => {
    window.open('https://instagram.com/rachealaberglobalva', '_blank')
  }

  return (
    <section id='contact' className='scroll-mt-12'>
      <div className='container'>
        <div className='relative'>
          <h2 className='mb-9 text-center'>Get in Touch</h2>
          <div className='relative border px-6 py-8 rounded-lg border-black/20 dark:border-white/20'>
            <div className='text-center'>
              <p className='text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
                Ready to streamline your business? Let's connect. Here are the best ways to reach me directly.
              </p>
              
              <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16'>
                {/* Phone */}
                <div className='flex flex-col items-center group'>
                  <div 
                    onClick={handlePhoneClick}
                    className='w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 mb-4 cursor-pointer group-hover:scale-110'
                  >
                    <svg className='w-8 h-8 text-primary' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <span className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Phone / WhatsApp</span>
                  <a 
                    href='tel:+256741010923'
                    className='text-lg font-medium text-gray-800 dark:text-white hover:text-primary transition-colors duration-300'
                  >
                    +256 741 010 923
                  </a>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>Available Mon-Fri, 9AM-5PM EAT</p>
                </div>

                {/* Email */}
                <div className='flex flex-col items-center group'>
                  <div 
                    onClick={handleEmailClick}
                    className='w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 mb-4 cursor-pointer group-hover:scale-110'
                  >
                    <svg className='w-8 h-8 text-primary' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <span className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Email</span>
                  <a 
                    href='mailto:rachealaberr@gmail.com'
                    className='text-lg font-medium text-gray-800 dark:text-white hover:text-primary transition-colors duration-300 break-all'
                  >
                    rachealaberr@gmail.com
                  </a>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>Response within 24 hours</p>
                </div>

                {/* Instagram */}
                <div className='flex flex-col items-center group'>
                  <div 
                    onClick={handleInstagramClick}
                    className='w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 mb-4 cursor-pointer group-hover:scale-110'
                  >
                    <svg className='w-8 h-8 text-primary' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3.22c-3.728 0-6.75 3.022-6.75 6.75s3.022 6.75 6.75 6.75 6.75-3.022 6.75-6.75-3.022-6.75-6.75-6.75zm0 11.25a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM15.85 4.15a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3z"></path>
                    </svg>
                  </div>
                  <span className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Instagram</span>
                  <a 
                    href='https://instagram.com/rachealaberglobalva'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-lg font-medium text-gray-800 dark:text-white hover:text-primary transition-colors duration-300'
                  >
                    @rachealaberglobalva
                  </a>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>Follow for tips & updates</p>
                </div>
              </div>

              {/* Working Hours / Additional Info */}
              <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700'>
                <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>Preferred Contact Method</h3>
                <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                  For urgent matters, please call or WhatsApp. For detailed project inquiries, email is best. 
                  I typically respond to emails within 24 hours during business days (Monday-Friday).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo