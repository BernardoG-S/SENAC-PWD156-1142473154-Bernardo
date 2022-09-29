import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Movimentacao from './pages/Movimentacao'
import Simulacao from './pages/Simulacao'
import Sobre from './pages/Sobre'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/Cadastro' element = {<Cadastro/>}/>
            <Route path = '/Movimentacao' element = {<Movimentacao/>}/>
            <Route path = '/Simulacao' element = {<Simulacao/>}/>
            <Route path = '/Sobre' element = {<Sobre/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;