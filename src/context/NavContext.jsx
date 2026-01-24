import { useEffect, useState } from 'react';
import { NavBarContext, NavBarSvgContext } from "./NavBarContext";
import { useLocation } from 'react-router-dom';

const NavContext = ({children}) => {

  const [navOpen, setnavOpen] = useState(false);
  const [svgColor, setsvgColor] = useState('white');

  const locate = useLocation().pathname;

  useEffect(() => {
       if(locate == '/agence' || locate == '/projects'){
        setsvgColor('black');
       }
       else{
        setsvgColor('white');
       }
  }, [locate])

  return (
    <div>
     <NavBarContext.Provider value={[navOpen, setnavOpen]}>
       <NavBarSvgContext.Provider value={[svgColor, setsvgColor]}>
        {children}
       </NavBarSvgContext.Provider>
     </NavBarContext.Provider>
    </div>
  )
}

export default NavContext
