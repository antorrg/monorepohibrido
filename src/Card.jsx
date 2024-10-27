import style from './styles/Card.module.css'
import {Link} from 'react-router-dom'


const Card = ({character}) => {
  const {id, name, image, origin} = character
  return (
    <div className={style.card}>
    <Link to={`/detail/${id}`}>
    <img src={image} alt='Not found' className={style.image}/>
    </Link>
    <div className={style.details}>
    <h3 style={{margin:'0'}}>{name}</h3>
    <div className={style.content}>
    <h4 style={{margin:'0'}}>Origin: </h4>
    <p>{origin}</p>
    </div>
    </div>
  </div>
  )
}

export default Card