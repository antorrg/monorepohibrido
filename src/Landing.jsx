import {Link} from 'react-router-dom'

const Landing = () => {
  const url= import.meta.env.VITE_URL;
  return (
    <div>
    <div className='preForm'>
    <div className='caption-nav'>
    <h1>Imitacion de login:</h1>
    <Link className = 'button' to='/home'>Entrar</Link>
    <a className = 'button' href={`${url}`}>Cancelar</a>
    </div>
    </div>
    </div>
  )
}

export default Landing