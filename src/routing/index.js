import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Features from '../pages/features';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/features' element={<Features />}>
                <Route path=':id' element={<Features />}></Route>
            </Route>
        </Routes>
    )
}

export default Routing