import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function AllRoutes() {
    return (
        <Router>
            <Routes>
                <Route  path='/'  element={<Home />} />
            </Routes>
        </Router>
    )
}
