import { createContext, useState } from "react";

// criando contexo
export const SidebarStateContext = createContext();

// criando provider
export const SidebarStateContextProvider = ({children}) => {    
     const[sideClose, setsideClose] = useState(true);

     return(
          <SidebarStateContext.Provider 
          value={{sideClose, setsideClose}}
          >
          {children}
          </SidebarStateContext.Provider>
     );
};
