import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Login from './Login'

function App() {
  return (
    <div>
        <Header />
        <div>
            <Routes>
                <Route path='/' element={<LinkList />} />
                <Route path='/create' element={<CreateLink />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
