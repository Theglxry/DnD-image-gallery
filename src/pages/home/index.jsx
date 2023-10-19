import React from 'react'
import LoginForm from '../../components/home/LoginForm'
import backgroundImage from '../../assets/images/black2.jpg'

// import AuthDetails from '../../hooks/AuthDetails';





function Homepage() {
const mainStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',  
  backgroundRepeat: 'no-repeat',  
  backgroundPosition: 'center center',  
}



  return (
    <main style= {mainStyle} className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-md">
        <LoginForm />
      </div>
    </main>
  )
}

export default Homepage