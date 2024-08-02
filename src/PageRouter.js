import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import MovieDetail from './page/MovieDetail'
import Signup from './page/Signup'
import LoginMain from './page/LoginMain'
import Login from './page/Login'

const PageRouter= ()=>{

    return (
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <Routes>
                <Route path='/' element={<Main></Main>}></Route>

                <Route path='/movie/:no' element={<MovieDetail/>}></Route>

                <Route path='/login' element={<Login/>}></Route>

                <Route path='/signup' element={<Signup/>}></Route>

                <Route path='/loginMain' element={<LoginMain/>}></Route>
            </Routes>

        </BrowserRouter>
    )

}

export default PageRouter