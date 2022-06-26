import '../styles/header.scss'
import { HiOutlineMoon } from 'react-icons/hi'



export function Header() {
  return (
    <header className="header">
      <div>
        <img src="/logo.svg" alt="to.do"/>
        <div className="texts">
          <p>(at night)</p> 
          <HiOutlineMoon color="#dadada"/>
        </div>
      </div>
    </header>
  )
}