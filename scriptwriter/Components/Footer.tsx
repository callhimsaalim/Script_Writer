import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='bg-[#00010733] h-screen'>
        <div className="flex border-t-2 p-4 border-[#03020e] justify-between sticky top-[100vh]">
        <ul className='flex items-center space-x-4'>
            <li className='footerItems'>Writing Time {`2:23:54`}</li>
            <li className='footerItems'>Thinking Time {`5:37:04`}</li>
        </ul>
        <ul className='flex items-center space-x-4'>
            <li className='footerItems'>Word Count {88+9}</li>
            <li className='footerItems'>Page Count {8+6}</li>
            <li className='footerItems'>Last Saved {`02:03:2022`}</li>
        </ul>
        </div>

        </footer>



    </div>
  )
}

export default Footer