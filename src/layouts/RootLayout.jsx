import './RootLayout.css'
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
          <NavLink to="/"><span className='dnav'>🏡</span></NavLink>   
          <NavLink to="dice_a"><span className='dnav'>👨</span></NavLink>  
          <NavLink to="dice_b"><span className='dnav'>👨‍🦰</span></NavLink>         
          <NavLink to="dice_c"><span className='dnav'>🧔‍♂️</span></NavLink>     
          <NavLink to="dice_d"><span className='dnav'>👱‍♂️</span></NavLink>   
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}