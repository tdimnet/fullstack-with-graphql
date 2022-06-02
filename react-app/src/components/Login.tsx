import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

type SignUpInputs = {
    email: string
    password: string
    name: string
}

type LoginInputs = {
    email: string
    password: string
}


const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpInputs>()

    const onSubmit: SubmitHandler<SignUpInputs> = data => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder='Your name'
                    type='text'
                    {...register('name', {  required: true })}
                />
                <input
                    placeholder='Your email'
                    type='email'
                    {...register('email', {  required: true })}
                />
                <input
                    placeholder='Your password'
                    type='password'
                    {...register('password', {  required: true })}
                />
                <input type='submit' />
            </form>
        </div>
    )
}

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>()

    const onSubmit: SubmitHandler<LoginInputs> = data => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder='Your email'
                    type='email'
                    {...register('email', {  required: true })}
                />
                <input
                    placeholder='Your password'
                    type='password'
                    {...register('password', {  required: true })}
                />
                <input type='submit' />
            </form>
        </div>
    )
}


const Component = () => {
    const navigate = useNavigate()
    const [ isLogginIn, setIsLogginIn ] = useState(true)

    return (
        <div>
            <h4>
                {
                    isLogginIn ? 'Login' : 'Sign Up'
                }
            </h4>
            {
                isLogginIn 
                    ? <Login /> 
                    : <SignUp />
            }
            <div>
                <button onClick={() => setIsLogginIn(!isLogginIn)}>
                    {
                        isLogginIn 
                            ? 'need to create an account?' 
                            : 'already have an account?'
                    }
                </button>
            </div>
        </div>
    )
}

export default Component

