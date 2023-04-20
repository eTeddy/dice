import { Outlet, NavLink } from "react-router-dom";

export function click_dice() {
  setTimeout(()=> {
    document.getElementById("roll_them").click();
 }
 ,100);
}

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">🏡</NavLink>   
          <NavLink to="dice_a">👨</NavLink>  
          <NavLink to="dice_b">👨‍🦰</NavLink>         
          <NavLink to="dice_c">🧔‍♂️</NavLink>     
          <NavLink to="dice_d">👱‍♂️</NavLink>    

        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}