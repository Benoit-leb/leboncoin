import React, {useState, useEffect} from "react";
import Link from "next/link";
import StyledNavbar from "./StyledNavbar";
import StyledBurger from "./StyledBurger";
import ToggleButton from "react-toggle-button";
import useDarkMode from "../useDarkMode"


const NavBar = () => {
  const [statusMenu, setMenu] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const onToggle = (status) => {
    setTheme(status ? "dark" : "light");
  };
  
  return (
    <React.Fragment>
      <StyledBurger onClick={() => setMenu(!statusMenu)} className="js-test-burger">
        <svg width="1em" height="1em" viewBox="0 0 20 14"><path d="M1.111 14H18.89C19.5 14 20 13.475 20 12.833c0-.641-.5-1.166-1.111-1.166H1.11C.5 11.667 0 12.192 0 12.833 0 13.475.5 14 1.111 14zm0-5.833H18.89C19.5 8.167 20 7.642 20 7s-.5-1.167-1.111-1.167H1.11C.5 5.833 0 6.358 0 7s.5 1.167 1.111 1.167zM0 1.167c0 .641.5 1.166 1.111 1.166H18.89C19.5 2.333 20 1.808 20 1.167 20 .525 19.5 0 18.889 0H1.11C.5 0 0 .525 0 1.167z" fill="#fe6f0f" fillRule="evenodd"></path></svg>
      </StyledBurger>
      <StyledNavbar className={statusMenu ? "open" : "close"}>
        <li>
          <Link href="/">
            <a>
              <span>
                <svg data-name="Calque 1" viewBox="0 0 24 24" width="1em" height="1em"><path d="M12 24a2.49 2.49 0 002.5-2.46h-5A2.48 2.48 0 0012 24zM21.13 18.2l-1.62-1.58v-6.16c0-3.78-2.05-6.94-5.63-7.78v-.83a1.88 1.88 0 00-3.76 0v.83c-3.59.84-5.63 4-5.63 7.78v6.16L2.87 18.2a1.23 1.23 0 00.88 2.11h16.49a1.23 1.23 0 00.89-2.11zM17 17.85H7v-7.39c0-3.05 1.89-5.54 5-5.54s5 2.49 5 5.54z"></path></svg>
              </span>
              <div>Mes recherches</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span>
               <svg data-name="Calque 1" viewBox="0 0 24 24" width="1em" height="1em"><path d="M21.19 2.24A6.76 6.76 0 0012 3.61a6.76 6.76 0 00-9.19-1.37A6.89 6.89 0 000 7.58c-.16 4.84 4 8.72 10.26 14.66l.12.12a2.32 2.32 0 003.23 0l.13-.12C20 16.29 24.15 12.41 24 7.57a6.89 6.89 0 00-2.81-5.33zm-9.07 18.15l-.12.12-.12-.12C6.17 15 2.4 11.46 2.4 7.86a4.18 4.18 0 014.2-4.37 4.68 4.68 0 014.28 3h2.25a4.66 4.66 0 014.27-3 4.18 4.18 0 014.2 4.37c0 3.6-3.77 7.14-9.48 12.53z"></path></svg>
              </span>
              <div>Favoris</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/messagerie">
            <a>
              <span>
               <svg data-name="Calque 1" viewBox="0 0 24 24" width="1em" height="1em"><path d="M18 12h-7.2a1.13 1.13 0 00-1.2 1.2 1.13 1.13 0 001.2 1.2H18a1.2 1.2 0 000-2.4zM6 7.2h12A1.13 1.13 0 0019.2 6 1.13 1.13 0 0018 4.8H6a1.2 1.2 0 000 2.4z"></path><path d="M21.6 0H2.4A2.41 2.41 0 000 2.4v14.4a2.41 2.41 0 002.4 2.4h16.8L24 24V2.4A2.41 2.41 0 0021.6 0zm0 18.24l-1.44-1.44H2.4V2.4h19.2z"></path><path d="M6 10.8h12a1.13 1.13 0 001.2-1.2A1.13 1.13 0 0018 8.4H6a1.2 1.2 0 100 2.4z"></path></svg>  
              </span>
              <div>Messages</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span>
               <svg data-name="Calque 1" viewBox="0 0 24 24" width="1em" height="1em"><path d="M12 12a5.92 5.92 0 005.86-6A5.93 5.93 0 0012 0a5.93 5.93 0 00-5.86 6A5.92 5.92 0 0012 12zm0-9a3 3 0 11-2.93 3A3 3 0 0112 3zM22.46 22.13a10.68 10.68 0 00-10.46-8 10.68 10.68 0 00-10.46 8A1.5 1.5 0 002.61 24a1.46 1.46 0 001.78-1.08A7.72 7.72 0 0112 17.09a7.72 7.72 0 017.61 5.78A1.48 1.48 0 0021 24a1.12 1.12 0 00.36-.05 1.5 1.5 0 001.1-1.82z"></path></svg>
              </span>
              <div>Benoit</div>
            </a>
          </Link>
        </li>
        <li>
          <ToggleButton
            inactiveLabel="off"
            activeLabel="on"
            value={theme === "dark"}
            onToggle={(status) => {
              onToggle(!status);
            }} />
            <div>Dark mode :</div>
        </li>
      </StyledNavbar>

    </React.Fragment>
  );
}; 

export default NavBar;