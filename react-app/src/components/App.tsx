import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import LinkList from './LinkList'
import CreateLink from './CreateLink'

function App() {
  return (
    <div>
        <Header />
        <div>
            <Routes>
                <Route path='/' element={<LinkList />} />
                <Route path='/create' element={<CreateLink />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
