import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

type SignUpInputs = {
    email: string
    password: string
    name: string
}

type LoginInputs = {
    email: string
    password: string
}

const SIGN_UP_MUTATION = gql`
    mutation SignUpMutation(
        $email: String!
        $password: String!
        $name: String
    ) {
        signup(
            email: $email
            password: $password
            name: $name
        ) {
            token
        }
    }
`

const LOGIN_MUTATION = gql`
    mutation LoginMutation(
        $email: String!
        $password: String!
    ) {
        login(email: $email, password: $password) {
            token
        }
    }
`


const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpInputs>()
    const [ signup ] = useMutation(SIGN_UP_MUTATION)

    const onSubmit: SubmitHandler<SignUpInputs> = data => signup({
        variables: {
            email: data.email,
            password: data.password,
            name: data.name
        },
        onCompleted: ({ signup }) => console.log(signup)
    })

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
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>()
    const [ login ] = useMutation(LOGIN_MUTATION)

    const onSubmit: SubmitHandler<LoginInputs> = data => login({
        variables: {
            email: data.email,
            password: data.password
        },
        onCompleted: ({ login }) => {
            localStorage.setItem('token', login.token)
            navigate('/')
        }
    })

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

