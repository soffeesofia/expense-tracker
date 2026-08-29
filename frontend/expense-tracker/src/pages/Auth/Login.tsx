import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthLayout from '../../components/layouts/AuthLayout'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h:-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back!</h3>
        <p className="text-xs text-slate-700 mt-1.25 mb-6">Enter your details to login to your account</p>

      </div>

      <form action="" className=""></form>
    </AuthLayout>
  )
}

export default Login
