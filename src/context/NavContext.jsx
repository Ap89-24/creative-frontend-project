import { useState } from 'react';
import { NavBarContext } from "./NavBarContext";

const NavContext = ({children}) => {

  const [navOpen, setnavOpen] = useState(false);

  return (
    <div>
     <NavBarContext.Provider value={[navOpen, setnavOpen]}>
       {children}
     </NavBarContext.Provider>
    </div>
  )
}

export default NavContext
