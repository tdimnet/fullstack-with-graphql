import { Link } from 'react-router-dom'

const Component = () => (
    <div>
        <div>
            <Link to='/'>
                Home
            </Link>
            <Link to='/'>
                New
            </Link>
            <Link to='/create'>
                Submit
            </Link>
        </div>
    </div>
)

export default Component

