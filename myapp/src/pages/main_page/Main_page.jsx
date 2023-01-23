import { Outlet } from 'react-router-dom';
import { Main_navigation } from '../../component/modules/main_modules/navigation/Main_navigation'

export function Main_page(){

  return(
    <div>
      <Main_navigation />
      <Outlet />
    </div>
  )
}