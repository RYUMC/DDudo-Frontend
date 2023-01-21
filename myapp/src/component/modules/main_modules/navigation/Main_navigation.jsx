import logOut from '../../../../assets/logOut.png'
import { Link } from 'react-router-dom';
import './Main_navigation.css'


export function Main_navigation(){
  return(
    <div className='main-naviagation'>
      <header>
        DDuDo
      </header>
      <main>

      </main>
      <footer>
        <span>Junhee</span>
        <Link to='/DDudo-Frontend'><img src={logOut} /></Link>
      </footer>
    </div>
  )
}