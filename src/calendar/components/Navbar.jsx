import { useAuthStore } from '../../hooks'

export const Navbar = () => {

const { startLogout, user } = useAuthStore()

  
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4" style={{ display: 'flex', justifyContent: 'space-between'}}>
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            { user.name }
        </span>

        <button onClick={ startLogout } className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            <span>Salir</span>
        </button>
    </div>
  )
}
