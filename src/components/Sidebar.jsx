import React, { useRef, useContext  } from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

//importando icones

import { CgMenuGridO } from "react-icons/cg";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//css style
import styles from './Sidebar.module.css';

/*************************************************************************************************************************/
const Sidebar = ({ObjMenu}) => {
  const {sideClose, setsideClose } = useContext(SidebarStateContext);  
  const menuRef = useRef();

  const OnMenuClick = () => {
    setsideClose(!sideClose);
    menuRef.current.classList.toggle(styles.close); 
  };
 
  return (
    <div className={`${styles.sidebar} ${styles.close}`}ref={menuRef} >
      <div className={styles.logo_details}>
        <i className={styles.menulogo}  onClick={OnMenuClick}><CgMenuGridO style={{width:'40px', height:'40px'}}/></i>
        <span className={styles.logo_name}>S.G.I.</span>
      </div>
      <ul className={styles.nav_links}>
          {ObjMenu.map((itemMenu, index)=> (
            <SideItem key={index} path={itemMenu.path}   nome={itemMenu.nome} icone={itemMenu.icone} visivel={itemMenu.visivel} temSubItem={itemMenu.temSubItem}>
              {
              itemMenu.subMenu?.map((subItem, idx) => (
              <SideSubItem key={idx} path={subItem.path} nome={subItem.nome}/>
              ))
              }
            </SideItem>
          ))}                
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  ObjMenu: PropTypes.array.isRequired,
}
/*************************************************************************************************************************/
const SideItem = ({path, icone, nome, visivel=true, temSubItem=false, children}) => {    
    const classSubMenu = temSubItem ? `${styles.sub_menu}` : `${styles.sub_menu} ${styles.blank}`;
      return (
        <li style={{display: visivel ? 'block' : 'none'}} >  
             <NavLink
                  to={path}>
                  <i>{icone}</i>
                  <span className={styles.link_name}>{nome} </span>
             </NavLink>  
              <ul className={classSubMenu} >
                <li><NavLink className={styles.link_name}to={path}>{nome}</NavLink></li>            
                {children}
              </ul>
        </li>
      );
}
  SideItem.propTypes = {
    path: PropTypes.string.isRequired,
    icone: PropTypes.element.isRequired,
    nome: PropTypes.string.isRequired,
    visivel: PropTypes.bool,
    temSubItem: PropTypes.bool
  }

/*************************************************************************************************************************/
const SideSubItem = ({path, nome, visivel=true, children}) => {
  return (
     <li>  
          <NavLink style={{fontSize:'16', color:'#e2e8f0'}}
              to={path}>
              {nome}
          </NavLink>    
     </li>
  );
}

SideSubItem.propTypes = {
  path: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  visivel: PropTypes.bool,
}


export {Sidebar, SideItem, SideSubItem }
