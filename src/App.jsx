import {
  createHashRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import DiceA from './pages/dice_a/DiceA'
import DiceB from './pages/dice_b/DiceB'
import DiceC from './pages/dice_c/DiceC'
import DiceD from './pages/dice_d/DiceD'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />   
      <Route path="dice_a" element={<DiceA />} />    
      <Route path="dice_b" element={<DiceB />} /> 
      <Route path="dice_c" element={<DiceC />} /> 
      <Route path="dice_d" element={<DiceD />} /> 
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App