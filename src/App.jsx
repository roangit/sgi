import {BrowserRouter, Routes, Route} from 'react-router-dom';

//importando icones
import { FaHandsHelping, FaArchive, FaChartBar, FaWpforms } from "react-icons/fa";
import { PiSirenFill } from "react-icons/pi";

//components
import  {Sidebar} from './components/Sidebar'; 

//paginas
import Dash from './pages/Dash';
import Projeto from './pages/Projeto';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'
import Risco from './pages/Risco';

//contextos
import { AuthContextProvider } from './contexts/AuthContext';
import { SidebarStateContextProvider } from './contexts/SidebarStateContext';
import Format from './pages/Format';



function App() {

const ListaMenu =[{path: '/dash',     nome: 'Dashnoards',   icone: <FaChartBar/>,   visivel: true },
  {path: '/cadastro', nome: 'Cadastros',    icone: <FaArchive/>,    visivel: true, temSubItem:true,
    subMenu: [ 
    {path: '/dash',  nome: 'Contratos' },
    {path: '/dash',  nome: 'Técnicos' },
    {path: '/dash',  nome: 'Vendedores' }
   ]}, 
  {path: '/projeto',  nome: 'Projetos',     icone: <FaHandsHelping/>,visivel: true },
  {path: '/risco',    nome: 'Ger.Risco',    icone: <PiSirenFill/>,  visivel: true },                
  {path: '/format',   nome: 'Formatações',  icone: <FaWpforms/>,    visivel: true }
];

  return (
    <div className="App">
      <BrowserRouter>
          <AuthContextProvider>
            <SidebarStateContextProvider>
            <Sidebar ObjMenu={ListaMenu}/>
              <Routes>
                <Route exact path="/login" element={<Login/>} /> 
                <Route path="/" element={<Dash />}/> 
                <Route path="/dash" element={<Dash />}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/projeto" element={<Projeto/>}/>              
                <Route path="/risco" element={<Risco/>}/>
                <Route path="/format" element={<Format/>}/>
              </Routes>
            </SidebarStateContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

