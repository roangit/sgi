import { node } from "prop-types";
import { createContext, useState } from "react";

// criando contexo
export const SidebarStateContext = createContext();

// criando provider
export const SidebarStateContextProvider = (props) => {    
     const[sideClose, setsideClose] = useState(true);

     return(
          <SidebarStateContext.Provider 
          value={{sideClose, setsideClose}}
          >
          {props.children}
          </SidebarStateContext.Provider>
     );
};
