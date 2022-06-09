import { Link, useNavigate } from 'react-router-dom'

import { AUTH_TOKEN } from '../constants'

const Component = () => {
    const navigate = useNavigate() 
    return (
        <div>
            <div>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/'>
                    New
                </Link>
                {
                    AUTH_TOKEN &&
                    <Link to='/create'>
                        Submit
                    </Link>
                }
                {
                    AUTH_TOKEN
                    ? (
                        <div onClick={() => {
                            localStorage.removeItem('token')
                            navigate('/')
                        }}>
                            Logout
                        </div>
                    ) : (
                        <Link to='/login'>
                            Login
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Component

