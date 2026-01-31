import React from 'react'
import signupImage from '../assets/signup.png'
import frame from '../assets/frame.png'
import Template from '../components/Template'
const SignUp = ({setIsLogin}) => {
  const heading = "Join the millions learning to code with StudyNotion for free";
  const description1 = "Build skills for today, tomorrow, and beyond.";
  const description2 = "Education to future-proof your career.";
  const type="signup";
  return (
    <div className='w-full'>
      <Template setIsLogin={setIsLogin} heading={heading} description1={description1} description2={description2} type={type} img={signupImage} frame={frame}  />
    </div>
  )
}

export default SignUp