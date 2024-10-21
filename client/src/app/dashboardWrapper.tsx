import React from 'react'
import Navbar from './(components)/Navbar'

// const x=min-h-screen

const DashboardWrapper= ({children}:{children:React.ReactNode}) => {
      return (
            <div className={`light flex bg-gray-500 w-full `}>
              <h1>SideBar</h1>
              <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}>
                 <Navbar/>
                 {children}
              </main>     
            </div>
      )
}

export default DashboardWrapper
