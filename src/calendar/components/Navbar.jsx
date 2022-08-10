import { useSelector, useDispatch  } from 'react-redux'
import { onLogout } from '../../store'

export const Navbar = () => {

  const { user   } = useSelector( state => state.auth)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch( onLogout() )
    localStorage.clear()
  }

  
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            { user.name }
        </span>

        <button onClick={ handleLogout } className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            <span>Salir</span>
        </button>
    </div>
  )
}
